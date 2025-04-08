import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    try {
        const updatedUser = await req.json();  
        
        const { email, name, dob, birthCity, postalCode, gender, country, address } = updatedUser;

        if (!email || !name || !dob || !birthCity || !postalCode || !gender || !country || !address) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (!existingUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const user = await prisma.user.update({
            where: { email },
            data: {
                name,
                dob: new Date(dob),
                birthCity,
                postalCode,
                gender,
                country,
                address,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
