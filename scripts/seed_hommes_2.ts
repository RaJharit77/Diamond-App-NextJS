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
    { id: 70, name: "Hummel Basket short de sport Bleu Marine", price: "31.25€", image: "/img/homme_70.jpg" },
    { id: 71, name: "Hummel ACTIVE T-shirt basic total eclipse Bleu Marine", price: "45€", image: "/img/homme_71.jpg" },
    { id: 72, name: "Hummel Kit pour gardien Core Vert pointure X_X large", price: "33.33€", image: "/img/homme_72.jpg" },
    { id: 73, name: "Hummel CORE XR TRAINING Pants sport survêtement Black", price: "42.22€", image: "/img/homme_73.jpg" },
    { id: 74, name: "Hummel Maillot d'Entraînement First Performance Vert", price: "47.80€", image: "/img/homme_74.jpg" },
    { id: 75, name: "Hummel SET survêtement dress Blues", price: "46.12€", image: "/img/homme_75.jpg" },
    { id: 76, name: "Hummel SET Trainingspak bering sea", price: "28.30€", image: "/img/homme_76.jpg" },
    { id: 77, name: "Hummel CORE XK Pants survêtement Black", price: "35.02€", image: "/img/homme_77.jpg" },
    { id: 78, name: "Hummel T-shirt imprimé Black", price: "43.26€", image: "/img/homme_78.jpg" },
    { id: 79, name: "Hummel T-shirt print Black", price: "39.22€", image: "/img/homme_79.jpg" },
    { id: 80, name: "Hummel CORE T-shirt Marine", price: "39.22€", image: "/img/homme_80.jpg" },
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
