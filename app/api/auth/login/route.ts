import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ message: "Email et mot de passe requis." }, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ message: "Email ou mot de passe incorrect." }, { status: 401 });
        }

        return NextResponse.json({
            user: { name: user.name, email: user.email },
            message: "Connexion réussie.",
        });
    } catch (error) {
        console.error("Erreur:", error);
        return NextResponse.json({ message: "Erreur lors de la connexion." }, { status: 500 });
    }
}
