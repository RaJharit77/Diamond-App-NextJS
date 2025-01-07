import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const femmes = [
    { id: 100, name: "Hummel HMLLogo FunctionShirt Move Damen Grobe XL Gray", price: "50.40€", image: "/img/femme_100.jpg" },
    { id: 101, name: "Hummel Go Cotton Sweat à capuche jaune femme medium", price: "30.59€", image: "/img/femme_101.jpg" },
    { id: 102, name: "Hummel HMLNANNA Pajkice hlace zephyr women Marina blue", price: "22.95€", image: "/img/femme_102.jpg" },
    { id: 103, name: "Hummel ", price: "43.57€", image: "/img/femme_103.jpg" },
    { id: 104, name: "Hummel ", price: "39.46€", image: "/img/femme_104.jpg" },
    { id: 105, name: "Hummel ", price: "23.23€", image: "/img/femme_105.jpg" },
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
