import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const enfants = [
    { name: "Hummel sweat pour enfant Noir avec un tennis offert", price: "77€", image: "/img/enfant_1.jpg" },
    { name: "Hummel Pullover taille S kapuco Black", price: "47€", image: "/img/enfant_2.jpg" },
    { name: "Maillot d'entraînement diamond taille S Bleu diamant", price: "27.33€", image: "/img/enfant_3.jpg" },
    { name: "Hummel CUATRO Pull - Dark olive", price: "39.39€", image: "/img/enfant_4.jpg" },
    { name: "Hummel RUNNER PANTS Unisex Jogging Black", price: "57.77€", image: "/img/enfant_5.jpg" },
    { name: "Hummel Everton L/S Sport shirt kids Maat 128", price: "87.20€", image: "/img/enfant_6.jpg" },
    { name: "Hummel Denmark 2018 Home jersey Shirt Red Size boys kid S Football", price: "12.12€", image: "/img/enfant_7.jpg" },
    { name: "Hummel AUTHENTIC 1_4Zip Sporttrui Kids Maat 128 Black and Green", price: "40.87€", image: "/img/enfant_8.jpg" },
    { name: "Hummel Denmark 1995 Away kit shirt Match Football Shirt culture White", price: "22.22€", image: "/img/enfant_9.jpg" },
    { name: "Hummel CLUB L_S Sport shirt kids Maat 116 Black", price: "16.17€", image: "/img/enfant_10.jpg" },
    { name: "Hummel CLUB S_S Sport shirt kids Maat 164 Green", price: "17.07€", image: "/img/enfant_11.jpg" },
    { name: "Hummel Denmark DBU Pro Kids Valsts Marina Blue", price: "29.29€", image: "/img/enfant_12.jpg" },
    { name: "Hummel Promo Poly sweat à capuche Bleu Enfant", price: "36.10€", image: "/img/enfant_13.jpg" },
    { name: "Hummel Paris Sport shirt kids Maat 116 Red", price: "20.70€", image: "/img/enfant_14.jpg" },
    { name: "Hummel Paris TTS Top Full Zip Sport vest Maat 128 Kids Yellow", price: "21.55€", image: "/img/enfant_15.jpg" },
    { name: "Hummel HMLLead Jersey Polyester Orange Enfant pointure 140cm", price: "17.17€", image: "/img/enfant_16.jpg" },
    { name: "Hummel Lead Sweat à Capuche Rouge enfant pointure 128cm", price: "25.25€", image: "/img/enfant_17.jpg" },
    { name: "Hummel Lead Veste & Capuche FZ Rouge Enfant pointure 128cm", price: "21.01€", image: "/img/enfant_18.jpg" },
    { name: "Hummel Leeds S_S Sport shirt Kids Maat 164", price: "37.78€", image: "/img/enfant_19.jpg" },
    { name: "Hummel Maillot Core Vert_blanc Enfant 176cm", price: "20.70€", image: "/img/enfant_20.jpg" },
    { name: "Hummel hmlCORE XK Poly zip Blue Marine Enfant", price: "28.55€", image: "/img/enfant_21.jpg" },
    { name: "Hummel HMLSET Polo & short 100% polyester Bleu turquoise & Bleu Marine", price: "63.30€", image: "/img/enfant_22.jpg" },
    { name: "Hummel HMLLogo t-shirt multisport unisex pour enfant Vert emeraude", price: "67.23€", image: "/img/enfant_23.jpg" },
    { name: "Hummel HMLRun t-shirt de course pour enfant Bleu diamant 100% coton lèger", price: "88.48€", image: "/img/enfant_24.jpg" },
    { name: "Hummel HMLAUTHENTIC sweat pour enfant Bleu cyan", price: "33.47€", image: "/img/enfant_25.jpg" },
    { name: "Hummel HMLCORE T-shirt pour enfant volley-ball Blanc", price: "27.80€", image: "/img/enfant_26.jpg" },
    { name: "Hummel HMLStaltic T-shirt en coton pour enfant Bleu Marine", price: "40.40€", image: "/img/enfant_27.jpg" },
    { name: "Hummel HMLLongrid t-shirt multisport enfiler Noir pour enfant", price: "20.10€", image: "/img/enfant_28.jpg" },
    { name: "Hummel HMLCORE XK sweatshirt à capuche pour enfant Blue", price: "30.40€", image: "/img/enfant_29.jpg" },
    { name: "Hummel HMLEssential sweatshirt multisport unisex Vert pour enfant", price: "22.59€", image: "/img/enfant_30.jpg" },
    { name: "Hummel HMLAUTHENTIC T-shirt multisport pour enfant Jaune & Bleu", price: "35.12€", image: "/img/enfant_31.jpg" },
    { name: "Hummel HMLEssential T-shirt multisport unisex pour enfant Gris", price: "29.29€", image: "/img/enfant_32.jpg" },
    { name: "Hummel HMLEssential T-shirt multisport unisex pour enfant Vert", price: "32.50€", image: "/img/enfant_33.jpg" },
    { name: "Hummel HMLLogo Kids unisex T-shirt Black", price: "27.55€", image: "/img/enfant_34.jpg" },
    { name: "Hummel HMLRUNNER Zip unisex sweat Black", price: "37.99€", image: "/img/enfant_35.jpg" },
    { name: "Hummel HMLSET survêtement sport Black", price: "32.50€", image: "/img/enfant_36.jpg" },
    { name: "Hummel HMLFirst jersey performance pour enfant Bleu", price: "38.82€", image: "/img/enfant_37.jpg" },
    { name: "Hummel HMLLead short pour enfant Bleu et Vert kaki", price: "43.67€", image: "/img/enfant_38.jpg" },
    { name: "Hummel T-shirt kinder Basic pour enfant Jaune", price: "32.50€", image: "/img/enfant_39.jpg" },
    { name: "Hummel SET Gornji dio trenirke enfant Black", price: "36.60€", image: "/img/enfant_40.jpg" },
    { name: "Hummel HMLCORE T-shirt pour enfant vert", price: "23.81€", image: "/img/enfant_41.jpg" },
    { name: "Hummel HMLCAES sweatshirt sodalite blue", price: "15.80€", image: "/img/enfant_42.jpg" },
    { name: "Hummel Classic Pantalon sport pour enfant Noir", price: "17.27€", image: "/img/enfant_43.jpg" },
    { name: "Hummel Sweatshirt à capuche Cuatro pour enfant Rose", price: "34.32€", image: "/img/enfant_44.jpg" },
    { name: "Hummel HMLCORE XK T-shirt Poly pour enfant Orange", price: "21.09€", image: "/img/enfant_45.jpg" },
    { name: "Hummel Maillot Domicile FC KÖLN 23_24 pour enfant Blanc", price: "17.27€", image: "/img/enfant_46.jpg" },
    { name: "Hummel 2Packs marshmallow White & Black Iris pour enfant", price: "34.32€", image: "/img/enfant_47.jpg" },
    { name: "Hummel HMLGAIL Sweatshirt & short complet pour enfant Noir", price: "21.09€", image: "/img/enfant_48.jpg" },
    { name: "Hummel HMLSET Pantalon Treningas Noir", price: "17.27€", image: "/img/enfant_49.jpg" },
    { name: "Hummel Leeds S_S SportShirt Kids Maat 164", price: "34.32€", image: "/img/enfant_50.jpg" },
    { name: "Hummel HMLSET Sweatshirt Treningas WoodRose", price: "21.09€", image: "/img/enfant_51.jpg" },
    { name: "Hummel BILLE SET Trenirka olive night", price: "22.12€", image: "/img/enfant_52.jpg" },
    { name: "Hummel BILLE SET Trenirka rose brown", price: "30.30€", image: "/img/enfant_53.jpg" },
    { name: "Hummel HMLGAIL Sport novice Black", price: "23.90€", image: "/img/enfant_54.jpg" },
    { name: "Hummel HML CORE XK POLY Jersey S_S Camiseta deportiva black", price: "40.11€", image: "/img/enfant_55.jpg" },
    { name: "Hummel HML CORE XK POLY Jersey S_S Sport t-shirt candy pink", price: "38.59€", image: "/img/enfant_56.jpg" },
    { name: "Hummel HMLGG12 Sweat à capuche pour enfant Bleu Turquoise", price: "35.35€", image: "/img/enfant_57.jpg" },
    { name: "Hummel XK SUBLIMA Kids UNISEX T-shirt print black", price: "31.99€", image: "/img/enfant_58.jpg" },
    { name: "Hummel Leeds S_S sportshirt Kids Maat 140 black", price: "50.10€", image: "/img/enfant_59.jpg" },
    { name: "Hummel PROMO KIDS Football PANT UNISEX Bleu Marine", price: "52.88€", image: "/img/enfant_60.jpg" },
    { name: "Hummel HMLMurphy T-shirt Manches Longues Enfant grise", price: "44.27€", image: "/img/enfant_61.jpg" },
    { name: "Hummel HMLLogo Kids T-shirt cotton S_S jaune", price: "25.67€", image: "/img/enfant_62.jpg" },
    { name: "Hummel HMLLogo Unisex Kinder jersey S_S kids", price: "35.35€", image: "/img/enfant_63.jpg" },
    { name: "Hummel Maillot Core Rouge Enfant 140cm", price: "29.87€", image: "/img/enfant_64.jpg" },
    { name: "Hummel Jogging Bleu Marine pour enfant", price: "40.30€", image: "/img/enfant_65.jpg" },
    { name: "Hummel Maillot Core Striped Noir_Jaune 116cm", price: "31.65€", image: "/img/enfant_66.jpg" },
    { name: "Hummel Lyon sportShirt kids Maat 164", price: "27.49€", image: "/img/enfant_67.jpg" },
    { name: "Hummel Perston S_S sportShirt Kids Maat 116", price: "23.87€", image: "/img/enfant_68.jpg" },
    { name: "Hummel Preston S_S SportShirt Kids Maat 152", price: "24.22€", image: "/img/enfant_69.jpg" },
    { name: "Hummel HMLDOS Sweat-shirt pour enfant Grise", price: "40.97€", image: "/img/enfant_70.jpg" },
    { name: "Hummel CLUB S_S Sportshirt Kids Maat 116 Bleu", price: "30.58€", image: "/img/enfant_71.jpg" },
    { name: "Hummel HMLCORE T-shirt Volley enfiler enfant Jaune", price: "50.12€", image: "/img/enfant_72.jpg" },
    { name: "Hummel Short Authentic Poly Jaune_Noir pour enfant", price: "47.07€", image: "/img/enfant_73.jpg" },
    { name: "Hummel HMLSET Logo short de sport Noir pour enfant", price: "60.02€", image: "/img/enfant_74.jpg" },
    { name: "Hummel Denmark DBU Pro sport Unisex Kids Bleu Marine", price: "69.69€", image: "/img/enfant_75.jpg" },
    { name: "Hummel HMLCORE XK Poly Shorts sport kids 128 Jaune", price: "13.89€", image: "/img/enfant_76.jpg" },
    { name: "Hummel HMLLEAD Korte broken lime punch for Kids", price: "17.50€", image: "/img/enfant_77.jpg" },
    { name: "Hummel Manchester Shorts Sportbroek Kids Maat 164", price: "18.69€", image: "/img/enfant_78.jpg" },
    { name: "Hummel HMLFIRST Performance Cuissard pour Enfant Jaune", price: "41.80€", image: "/img/enfant_79.jpg" },
    { name: "Hummel HMLFIRST Performance Cuissard pour Enfant Bleu", price: "51.09€", image: "/img/enfant_80.jpg" },
    { name: "Hummel HMLRUN Unisex Korte broek sport pour Enfant Noir", price: "36.62€", image: "/img/enfant_81.jpg" },
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
