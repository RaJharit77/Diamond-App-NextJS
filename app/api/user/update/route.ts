import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, name, dob, birthCity, postalCode, gender, country } = await req.json();

        if (!email) {
            return NextResponse.json({ message: "L'email est requis." }, { status: 400 });
        }

        const updatedUser = await prisma.user.update({
            where: { email },
            data: { name, dob, birthCity, postalCode, gender, country },
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error: any) {
        console.error("Erreur serveur :", error.message || error);
        return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
    }
}
