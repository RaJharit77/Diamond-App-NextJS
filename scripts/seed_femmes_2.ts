import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const femmes = [
    { name: "Hummel HMLLogo FunctionShirt Move Damen Grobe XL Gray", price: "50.40€", image: "/img/femme_100.jpg" },
    { name: "Hummel Go Cotton Sweat à capuche jaune femme medium", price: "30.59€", image: "/img/femme_101.jpg" },
    { name: "Hummel HMLNANNA Pajkice hlace zephyr women Marina blue", price: "22.95€", image: "/img/femme_102.jpg" },
    { name: "Hummel Jersey Denmark GoalKeeper kit 2022 green Women", price: "43.57€", image: "/img/femme_103.jpg" },
    { name: "Hummel ", price: "39.46€", image: "/img/femme_104.jpg" },
    { name: "Hummel ", price: "23.23€", image: "/img/femme_105.jpg" },
];


async function main() {
    console.log("Seeding produits pour femmes...");
    for (const femme of femmes) {
        await prisma.femmes.create({
            data: femme,
        });
    }
    console.log("Seeding terminé pour femmes.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
