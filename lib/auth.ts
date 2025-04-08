import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Email et mot de passe requis.");
                }

                const { email, password } = credentials;

                const user = await prisma.user.findUnique({ where: { email } });
                if (!user) {
                    throw new Error("Utilisateur non trouvé.");
                }

                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                    throw new Error("Mot de passe incorrect.");
                }

                return { id: user.id.toString(), name: user.name, email: user.email };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
