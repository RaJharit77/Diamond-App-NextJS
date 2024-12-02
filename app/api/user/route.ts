import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const authorization = req.headers.get("Authorization");
        if (!authorization) {
            return NextResponse.json({ message: "Email requis." }, { status: 400 });
        }

        const token = authorization.split(" ")[1];
        if (!token) {
            return NextResponse.json({ message: "Email requis." }, { status: 400 });
        }

        const email = token;

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return NextResponse.json({ message: "Utilisateur non trouvé." }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error: any) {
        console.error("Erreur serveur :", error.message || error);
        return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
    }
}
