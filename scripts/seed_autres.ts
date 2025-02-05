import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const autres = [
    { id: 1, name: "Hummel CORE - Sporta soma Marina Blue & Sky blue", price: "49€", image: "/img/autre_1.jpg" },
];

async function main() {
    console.log("Seeding produits pour autres...");
    for (const autre of autres) {
        await prisma.femmes.create({
            data: autre,
        });
    }
    console.log("Seeding terminé pour autres.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
