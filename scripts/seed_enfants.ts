import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const enfants = [
    { id: 1, name: "Hummel sweat pour enfant Noir avec un tennis offert", price: "77€", image: "/img/enfant_1.jpg" },
];

async function main() {
    console.log("Seeding produits pour enfants...");
    for (const enfant of enfants) {
        await prisma.enfants.create({
            data: enfant,
        });
    }
    console.log("Seeding terminé pour enfants.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
