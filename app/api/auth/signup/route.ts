import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
        return NextResponse.json({ message: "Tous les champs sont requis." }, { status: 400 });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ message: "Inscription réussie." });
    } catch {
        return NextResponse.json({ message: "Erreur lors de l'inscription." }, { status: 500 });
    }
}
