import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ message: "Email et mot de passe requis." }, { status: 400 });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        return NextResponse.json({ message: "Utilisateur créé avec succès.", user });
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
                return NextResponse.json({ message: "Email déjà utilisé." }, { status: 409 });
            }

            return NextResponse.json({ message: "Erreur lors de l'inscription." }, { status: 500 });
        }

        return NextResponse.json({ message: "Erreur interne." }, { status: 500 });
    }
}
