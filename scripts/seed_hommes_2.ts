import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const hommes =  [
    { id: 55, name: "Hummel Pro League Football kits concept golden kit", price: "55.78€", image: "/img/homme_55.jpg" },
    { id: 56, name: "Hummel Jersey Denmark GoalKeeper kit 2022 green Men", price: "43.89€", image: "/img/homme_56.jpg" },
    { id: 57, name: "Hummel Polo shirt Jungen Grobe 128 dark Green Men", price: "44.09€", image: "/img/homme_57.jpg" },
    { id: 58, name: "Hummel Outdoor jacket Marina Blue", price: "36.88€", image: "/img/homme_58.jpg" },
    { id: 59, name: "Hummel Poly Hoodie Multisport Black", price: "53.10€", image: "/img/homme_59.jpg" },
    { id: 60, name: "Hummel MOVE veste de sûrvêtement rosin", price: "40.04€", image: "/img/homme_60.jpg" },
    { id: 61, name: "Hummel Denmark Away Euro jersey 2024 Men's Replica", price: "46.78€", image: "/img/homme_61.jpg" },
    { id: 62, name: "Hummel Werder Bremen Home jersey 2023_2024 Replica", price: "49.13€", image: "/img/homme_62.jpg" },
    { id: 63, name: "Hummel Pull Noir avec Mister V ambassadeur de Hummel", price: "72.09€", image: "/img/homme_63.jpg" },
    { id: 64, name: "Hummel Sweat Blue & White avec Mister V", price: "60.87€", image: "/img/homme_61.jpg" },
    { id: 65, name: "Hummel Blouse sportif Noir avec Mister V", price: "57.69€", image: "/img/homme_62.jpg" },
    { id: 66, name: "Hummel Incheon United Away Kit 2019 white", price: "32.09€", image: "/img/homme_63.jpg" },
    { id: 67, name: "Hummel RANE Spodnji delitrenirk black", price: "23.17€", image: "/img/homme_67.jpg" },
    { id: 68, name: "Hummel Denmark Men away kit Long sleeve", price: "20.97€", image: "/img/homme_68.jpg" },
    { id: 69, name: "Hummel Everton Third kit Yellow & Blue", price: "27.03€", image: "/img/homme_69.jpg" },
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
