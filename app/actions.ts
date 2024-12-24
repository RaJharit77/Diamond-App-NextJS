"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    if (!process.env.DATABASE_URL_NEON) {
        throw new Error("DATABASE_URL_NEON is not defined");
    }
    const sql = neon(process.env.DATABASE_URL_NEON);
    const data = await sql`...`;
    return data;
}