import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const hommes =  [
    { id: 55, name: "Hummel ", price: "43.89€", image: "/img/homme_55.jpg" },
    { id: 56, name: "Hummel ", price: "43.89€", image: "/img/homme_55.jpg" },
    { id: 57, name: "Hummel ", price: "43.89€", image: "/img/homme_55.jpg" },
];


async function main() {
    console.log("Seeding produits pour hommes...");
    for (const homme of hommes) {
        await prisma.hommes.create({
            data: homme,
        });
    }
    console.log("Seeding terminé pour hommes.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
