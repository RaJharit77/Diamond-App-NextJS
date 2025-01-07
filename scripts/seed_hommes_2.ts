import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const hommes =  [
    { id: 55, name: "Hummel Pro League Football kits concept golden kit", price: "55.78€", image: "/img/homme_55.jpg" },
    { id: 56, name: "Hummel Jersey Denmark GoalKeeper kit 2022 green Men", price: "43.89€", image: "/img/homme_56.jpg" },
    { id: 57, name: "Hummel Polo shirt Jungen Grobe 128 dark Green Men", price: "43.89€", image: "/img/homme_57.jpg" },
    { id: 58, name: "Hummel Outdoor jacket Marina Blue", price: "36.88€", image: "/img/homme_58.jpg" },
    { id: 59, name: "Hummel Poly Hoodie Multisport Black", price: "53.10€", image: "/img/homme_59.jpg" },
    { id: 60, name: "Hummel MOVE veste de sûrvêtement rosin", price: "40.04€", image: "/img/homme_60.jpg" },
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
