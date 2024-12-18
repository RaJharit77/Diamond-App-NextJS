import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const userEmail = url.searchParams.get("userEmail");

    if (!userEmail) {
        return NextResponse.json({ message: "Email not provided" }, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: userEmail,
            },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
