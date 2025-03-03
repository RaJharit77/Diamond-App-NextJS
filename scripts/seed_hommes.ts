import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const hommes = [
    { id: 1, name: "Hummel sûrvêtement Coton", price: "90€", image: "/img/homme_1.jpg" },
    { id: 2, name: "Hummel blouse sportif Poly", price: "56€", image: "/img/homme_2.jpg" },
    { id: 3, name: "Danemark sweat blue travel", price: "79€", image: "/img/homme_3.jpg" },
    { id: 4, name: "Danemark Maillot Noir Pro d'Entraînement CDM 2022", price: "29.99€", image: "/img/homme_4.jpg" },
    { id: 5, name: "Maillot Everton Extérieur 2023-2024 taille (L, XL, XXL)", price: "30.77€", image: "/img/homme_5.jpg" },
    { id: 6, name: "Hummel T-shirt classique à chevron rouge", price: "45€", image: "/img/homme_6.jpg" },
    { id: 7, name: "Hummel Maillot Denmark Qualification Euro 2024 avec Christian Eriksen", price: "49€", image: "/img/homme_7.jpg" },
    { id: 8, name: "Hummel HMLLGC DEVOTION World Wide SportGear - T-shirt print black", price: "29€", image: "/img/homme_8.jpg" },
    { id: 9, name: "Hummel CORE L/S - T-shirt pro à manches longues men Ever Green", price: "39€", image: "/img/homme_9.jpg" },
    { id: 10, name: "Hummel First Performance Baselayer manches longues blanc pointures X_large", price: "58€", image: "/img/homme_10.jpg" },
    { id: 11, name: "Hummel Denmark PREGAME - Valsts izlases Frejas Sal black and white", price: "27€", image: "/img/homme_11.jpg" },
    { id: 12, name: "Hummel hive Sport shirt Football with Sidelinerd FC XXL black and red", price: "45€", image: "/img/homme_12.jpg" },
    { id: 13, name: "Hummel Sweat à capuche à logo Blue Marine", price: "88€", image: "/img/homme_13.jpg" },
    { id: 14, name: "Hummel Sweat shirt Classique à chevrons Noir", price: "77€", image: "/img/homme_14.jpg" },
    { id: 15, name: "Hummel T-Shirt classique à chevrons Blanc", price: "65€", image: "/img/homme_15.jpg" },
    { id: 16, name: "Hummel Virgil T-Shirt Noir L/S/XL/M", price: "80€", image: "/img/homme_16.jpg" },
    { id: 17, name: "Hummel CORE Kit Black & Yellow Sport", price: "73€", image: "/img/homme_17.jpg" },
    { id: 18, name: "Hummel Denmark Kit Away 2016-2017 released", price: "60€", image: "/img/homme_18.jpg" },
    { id: 19, name: "Hummel Everton Kit Third Shirt gray", price: "75.55€", image: "/img/homme_19.jpg" },
    { id: 20, name: "Hummel HMLISAM 20 T-Shirt print Black", price: "63.77€", image: "/img/homme_20.jpg" },
    { id: 21, name: "Hummel Denmark Diversity T-Shirt 2024", price: "66.43€", image: "/img/homme_21.jpg" },
    { id: 22, name: "Hummel Denmark Sweat à Capuche Travel World Cup 2022 Noir XX_Large", price: "45.55€", image: "/img/homme_22.jpg" },
    { id: 23, name: "Hummel Denmark T-Shirt Fan Football Black & Red 2022 pointure Small", price: "53.77€", image: "/img/homme_23.jpg" },
    { id: 24, name: "Hummel Denmark Euro 2020 Home Kit 2021-2022 Long Sleeve Red & White", price: "76.43€", image: "/img/homme_24.jpg" },
    { id: 25, name: "Hummel Denmark Home Kit Red 134 years of the DBU", price: "75.55€", image: "/img/homme_25.jpg" },
    { id: 26, name: "Hummel HMLISAM 2.0 T-Shirt imprimé true Blue", price: "33.77€", image: "/img/homme_26.jpg" },
    { id: 27, name: "Hummel CIMA XK T-Shirt imprimé Black", price: "46.43€", image: "/img/homme_27.jpg" },
    { id: 28, name: "Hummel CORE L/S POLY Red Jersey Jacket", price: "57.35€", image: "/img/homme_28.jpg" },
    { id: 29, name: "Hummel CORE Maillot Bordeaux pointure XX_Large", price: "23.77€", image: "/img/homme_29.jpg" },
    { id: 30, name: "Hummel CORE SPRAY Training true Blue", price: "37.83€", image: "/img/homme_30.jpg" },
    { id: 31, name: "Hummel HMLAUTHENTIC Sweat_Shirt true Red", price: "47.75€", image: "/img/homme_31.jpg" },
    { id: 32, name: "Hummel HMLLEAD Poly Zip Jacket true Red", price: "35.60€", image: "/img/homme_32.jpg" },
    { id: 33, name: "Hummel HMLTRES T-Shirt with Kinder Geib Yellow", price: "26.89€", image: "/img/homme_33.jpg" },
    { id: 34, name: "Hummel HMLCLASSIC Classic Logo T-Shirt L/S/M/S/XL in Bright White", price: "30.75€", image: "/img/homme_34.jpg" },
    { id: 35, name: "Hummel Core XK Micro Training Kinder Marken & Hersteller Black", price: "42.60€", image: "/img/homme_35.jpg" },
    { id: 36, name: "Hummel Core XK Polyesterhose Herren Black Handball sport", price: "71.89€", image: "/img/homme_36.jpg" },
    { id: 37, name: "Hummel CORE XK Poly Zip Sweat Black", price: "61.33€", image: "/img/homme_37.jpg" },
    { id: 38, name: "Hummel LEAD T-Shirt de Sport White", price: "50.03€", image: "/img/homme_38.jpg" },
    { id: 39, name: "Hummel Liverpool Shirt L/M VolleyBall Shirt Orange", price: "70.07€", image: "/img/homme_39.jpg" },
    { id: 40, name: "Hummel Survêtement Track Top purple", price: "12.33€", image: "/img/homme_40.jpg" },
    { id: 41, name: "Hummel Pull TrainingSpak Black", price: "17.03€", image: "/img/homme_41.jpg" },
    { id: 42, name: "Hummel SweatShirt Damen Yellow", price: "22.07€", image: "/img/homme_42.jpg" },
    { id: 43, name: "Hummel AGF AARHUS Away Kit Green", price: "32.83€", image: "/img/homme_43.jpg" },
    { id: 44, name: "Hummel Short Authentic Training Noir Medium", price: "12.93€", image: "/img/homme_44.jpg" },
    { id: 45, name: "Hummel T-Shirt print Cotton Black", price: "23.47€", image: "/img/homme_45.jpg" },
    { id: 46, name: "Hummel T-Shirt Cotton print White", price: "62.13€", image: "/img/homme_46.jpg" },
    { id: 47, name: "Hummel Pull Sport SweatShirt Yellow", price: "77.90€", image: "/img/homme_47.jpg" },
    { id: 48, name: "Hummel Sport SweatShirt Daniel Grobe XS Yellow", price: "45.09€", image: "/img/homme_48.jpg" },
    { id: 49, name: "Hummel Werder Bremen Third Kit football Noir 2024-25", price: "26.30€", image: "/img/homme_49.jpg" },
    { id: 50, name: "Hummel TOPAZ T-Shirt Imprimé Black", price: "87.03€", image: "/img/homme_50.jpg" },
    { id: 51, name: "Hummel Zeno Limited Shirt Bleu turquoise", price: "56.09€", image: "/img/homme_51.jpg" },
    { id: 52, name: "Hummel Spodnji deli trenirk black", price: "17.77€", image: "/img/homme_52.jpg" },
    { id: 53, name: "Hummel Tech Gold KM XXL Green & Black", price: "29.83€", image: "/img/homme_53.jpg" },
    { id: 54, name: "Hummel MONSUN Tex Veste impermeable olive night", price: "41.79€", image: "/img/homme_54.jpg" },
];

async function main() {
    console.log("Seeding produits pour hommes...");

    await prisma.hommes.deleteMany();

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
