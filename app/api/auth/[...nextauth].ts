import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        email?: string;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
                if (credentials?.email && credentials.password) {
                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email },
                    });

                    if (user && bcrypt.compareSync(credentials.password, user.password)) {
                        return { id: user.id.toString(), email: user.email } as User;
                    }
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
        signOut: "/",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({
            token,
            user,
        }: {
            token: JWT;
            user?: User | null;
        }): Promise<JWT> {
            if (user) {
                token.id = user.id ?? undefined;
                token.email = user.email ?? undefined;
            }
            return token;
        },
        async session({
            session,
            token,
        }: {
            session: Session;
            token: JWT;
        }): Promise<Session> {
            if (token) {
                session.user = {
                    id: token.id ?? "",
                    email: token.email ?? "",
                };
            }
            return session;
        },
    },
};

export default NextAuth(authOptions);
