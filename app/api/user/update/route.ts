import prisma from "@/lib/prisma";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const name = formData.get("name")?.toString() || "";
        const image = formData.get("image") as File | null;

        if (!name) {
            return NextResponse.json({ message: "Le nom est requis." }, { status: 400 });
        }

        let imagePath = null;
        if (image) {
            const buffer = Buffer.from(await image.arrayBuffer());
            const fileName = `${uuidv4()}-${image.name}`;
            const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

            await fs.writeFile(uploadPath, buffer);
            imagePath = `/uploads/${fileName}`;
        }

        const updatedUser = await prisma.user.update({
            where: { id: 1 },
            data: {
                name,
                ...(imagePath && { image: imagePath }),
            },
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Erreur lors de la mise à jour du profil." },
            { status: 500 }
        );
    }
}
