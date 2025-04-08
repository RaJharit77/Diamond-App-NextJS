import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const femmes = [
    { id: 1, name: "Hummel Brassière de sport sans coûture taille (S, L, XL) jersey woman", price: "30€", image: "/img/femme_1.jpg" },
    { id: 2, name: "Hummel HMLSet Sport sans coûture taille (S, L, XL) woman Pack", price: "57€", image: "/img/femme_2.jpg" },
    { id: 3, name: "Maillot Gardienne de Danemark CDM Féminin 2023 taille (S, L, XL)", price: "93€", image: "/img/femme_3.jpg" },
    { id: 4, name: "Hummel first T-shirt sans coûture à manches longues noir jersey", price: "23.35€", image: "/img/femme_4.jpg" },
    { id: 5, name: "Hummel débardeur classique rose désert à logo taille medium", price: "40.77€", image: "/img/femme_5.jpg" },
    { id: 6, name: "Hummel Tif soutient gorge sport sans coûture bleu taille medium", price: "33€", image: "/img/femme_6.jpg" },
    { id: 7, name: "Hummel Core Short Noir poly woman", price: "27.55€", image: "/img/femme_7.jpg" },
    { id: 8, name: "Hummel Legging de sport sans coûture Rose", price: "53€", image: "/img/femme_8.jpg" },
    { id: 9, name: "Hummel Legging taille haute sans coûture", price: "70€", image: "/img/femme_9.jpg" },
    { id: 10, name: "Hummel Seamless T-shirt à manches longues Vert Kaki", price: "50€", image: "/img/femme_10.jpg" },
    { id: 11, name: "Hummel Cuissard Cyclisme sans coûture", price: "25€", image: "/img/femme_11.jpg" },
    { id: 12, name: "Hummel first Legging de sport sans coûtures Rose", price: "44€", image: "/img/femme_12.jpg" },
    { id: 13, name: "Hummel Sweat à capuche doux Noir", price: "39€", image: "/img/femme_13.jpg" },
    { id: 14, name: "Hummel First T-shirt sans coûture à manches courtes", price: "69€", image: "/img/femme_14.jpg" },
    { id: 15, name: "Hummel Sweat à logo à manches long Crème Blanc", price: "75€", image: "/img/femme_15.jpg" },
    { id: 16, name: "Hummel Brassière de sport à maintient lèger deep litchen green", price: "73€", image: "/img/femme_16.jpg" },
    { id: 17, name: "Hummel CamiSeamless sport athletic noir melange crème blanc", price: "32€", image: "/img/femme_17.jpg" },
    { id: 18, name: "Hummel HMLTif soutient gorge sport Top sans coûture Noir taille medium", price: "22€", image: "/img/femme_18.jpg" },
    { id: 19, name: "Hummel T-shirt de sport dusty blue", price: "102€", image: "/img/femme_19.jpg" },
    { id: 20, name: "Hummel veste de sûrvêtement  à liséré Noir", price: "29€", image: "/img/femme_20.jpg" },
    { id: 21, name: "Hummel CamiSeamless sport grise", price: "20€", image: "/img/femme_21.jpg" },
    { id: 22, name: "Hummel T-shirt à manches courtes en coton noir XK avec logo", price: "62€", image: "/img/femme_22.jpg" },
    { id: 23, name: "Hummel Legging à taille haute ultra stretch avec poche latérale noir", price: "71€", image: "/img/femme_23.jpg" },
    { id: 24, name: "Hummel Legging moullant sans coûture de Sport Noir taille medium", price: "65€", image: "/img/femme_24.jpg" },
    { id: 25, name: "Hummel HMLFirst T-shirt Seamless jersey (S, L) beige", price: "47€", image: "/img/femme_25.jpg" },
    { id: 26, name: "Hummel Legacy T-shirt à manches longues unisexe blanc", price: "42.47€", image: "/img/femme_26.jpg" },
    { id: 27, name: "Hummel First Seamless athletic sport black limited edition", price: "77€", image: "/img/femme_27.jpg" },
    { id: 28, name: "T-shirt Handball Femme Hummel Core Xk Noir", price: "92€", image: "/img/femme_28.jpg" },
    { id: 29, name: "Maillot de football féminin poly et coton", price: "31€", image: "/img/femme_29.jpg" },
    { id: 30, name: "Hummel T-shirt Damen Grobe weinrot XS_S taille medium", price: "21€", image: "/img/femme_30.jpg" },
    { id: 31, name: "Hummel Lifestyle collection with Aybuke Pusat", price: "91€", image: "/img/femme_31.jpg" },
    { id: 32, name: "Hummel LULU Seamless sport Scrunch black melange", price: "87€", image: "/img/femme_32.jpg" },
    { id: 33, name: "Hummel Linne black collector edition", price: "74€", image: "/img/femme_33.jpg" },
    { id: 34, name: "Legging Fur Frauen Hummel Mt Saga turquoise blue", price: "53€", image: "/img/femme_34.jpg" },
    { id: 35, name: "Hummel & Nike collab Pro training black edition", price: "68€", image: "/img/femme_35.jpg" },
    { id: 36, name: "Hummel Sport-bh Nathloser with Damen Cléa red", price: "54€", image: "/img/femme_36.jpg" },
    { id: 37, name: "Hummel Core XK Poly T-shirt taille S_S woman", price: "52€", image: "/img/femme_37.jpg" },
    { id: 38, name: "Hummel Core sweat à capuche bleu danube", price: "66.50€", image: "/img/femme_38.jpg" },
    { id: 39, name: "Hummel Core Short de sport true blue blazing yellow", price: "56.78€", image: "/img/femme_39.jpg" },
    { id: 40, name: "Hummel HMLAUTHENTIC Korte sportsbukser true blue_yellow", price: "61€", image: "/img/femme_40.jpg" },
    { id: 41, name: "Hummel HMLAUTHENETIC Short de sport black and white", price: "78.45€", image: "/img/femme_41.jpg" },
    { id: 42, name: "Hummel HMLAUTHENTIC Sportovni bunda marine", price: "56.55€", image: "/img/femme_42.jpg" },
    { id: 43, name: "Hummel Core Short de sport white", price: "72€", image: "/img/femme_43.jpg" },
    { id: 44, name: "Hummel First SEAMLESS T-shirt de sport black", price: "67€", image: "/img/femme_44.jpg" },
    { id: 45, name: "Hummel HMLCI Puncochy black melange", price: "46€", image: "/img/femme_45.jpg" },
    { id: 46, name: "Hummel HMLCLEA SEAMLESS Tight black melange", price: "74€", image: "/img/femme_46.jpg" },
    { id: 47, name: "Hummel HMLCLEA SEAMLESS Tight Laurel wreath melange", price: "60€", image: "/img/femme_47.jpg" },
    { id: 48, name: "Hummel First Seamless Top Noir pointure X_XX Large", price: "40€", image: "/img/femme_48.jpg" },
    { id: 49, name: "Hummel First Seamless Top Noir pointure XX_X Large LNG", price: "32.17€", image: "/img/femme_49.jpg" },
    { id: 50, name: "Hummel HMLGO Polo white pointure L/S", price: "57.22€", image: "/img/femme_50.jpg" },
    { id: 51, name: "Hummel HMLLGC DELTA Bonnet Legacy melange", price: "33.45€", image: "/img/femme_51.jpg" },
    { id: 52, name: "Hummel HMLTAYLOR T-shirt L_S coton", price: "82€", image: "/img/femme_52.jpg" },
    { id: 53, name: "Hummel SEAMLESS - Short black", price: "61€", image: "/img/femme_53.jpg" },
    { id: 54, name: "Hummel HMLMT UNA SEAMLESS Top Black - melange", price: "43€", image: "/img/femme_54.jpg" },
    { id: 55, name: "Hummel HMLTE TOLA 2 PACK sport black driftwood", price: "80€", image: "/img/femme_55.jpg" },
    { id: 56, name: "Hummel HMLTE TOLA 2 PACK sport grey driftwood", price: "65€", image: "/img/femme_56.jpg" },
    { id: 57, name: "Hummel Iclea Seamless collant Noir pointure medium", price: "36€", image: "/img/femme_57.jpg" },
    { id: 58, name: "Hummel LEAD Women T-shirt de sport raspberry sorbet", price: "70€", image: "/img/femme_58.jpg" },
    { id: 59, name: "Hummel LEAD Women T-shirt de sport raspberry sorbet cmpl", price: "68€", image: "/img/femme_59.jpg" },
    { id: 60, name: "Hummel LEAD Women T-shirt de sport true blue", price: "28€", image: "/img/femme_60.jpg" },
    { id: 61, name: "Hummel MAJA 2 PACK sport black insignia blue", price: "80€", image: "/img/femme_61.jpg" },
    { id: 62, name: "Hummel MAJA 2 PACK sport black insignia black", price: "65€", image: "/img/femme_62.jpg" },
    { id: 63, name: "Hummel Pull with Mikina yellow coton", price: "36€", image: "/img/femme_63.jpg" },
    { id: 64, name: "Hummel Pajkice - sport black melange", price: "34€", image: "/img/femme_64.jpg" },
    { id: 65, name: "Hummel Puncochy - insignia blue", price: "44€", image: "/img/femme_65.jpg" },
    { id: 66, name: "Hummel Puncochy - London fog khaki green", price: "38€", image: "/img/femme_66.jpg" },
    { id: 67, name: "Hummel SEAMLESS Débardeur - white - grey", price: "39€", image: "/img/femme_67.jpg" },
    { id: 68, name: "Hummel SEAMLESS Uhreilulivit chateau grey melange", price: "51€", image: "/img/femme_68.jpg" },
    { id: 69, name: "Hummel SHAPPING SEAMLESS sport black", price: "57.89€", image: "/img/femme_69.jpg" },
    { id: 70, name: "Hummel TIF SEAMLESS brassières sport normale black iris", price: "78€", image: "/img/femme_70.jpg" },
    { id: 71, name: "Hummel TOLA - Neliela atbalsta sporta krusturis cabernet blood red", price: "69€", image: "/img/femme_71.jpg" },
    { id: 72, name: "Hummel Top - marina blue and green melange sport normale complete", price: "73€", image: "/img/femme_72.jpg" },
    { id: 73, name: "Hummel Crop top de sport à bretteles fines dos échancré Vert foncé", price: "54€", image: "/img/femme_73.jpg" },
    { id: 74, name: "Hummel HMLTIF SEAMLESS Sport Top gris foncé taille (XS, M, XL)", price: "63€", image: "/img/femme_74.jpg" },
    { id: 75, name: "Hummel HMLTRAVEL SweatPants Women - Spodnji deli trenirk - black", price: "47€", image: "/img/femme_75.jpg" },
    { id: 76, name: "Hummel T-shirt basic - pure black", price: "40.23€", image: "/img/femme_76.jpg" },
    { id: 77, name: "Hummel T-shirt basic - grey melange", price: "26.96€", image: "/img/femme_77.jpg" },
    { id: 78, name: "Hummel T-shirt imprimé light - pink", price: "70€", image: "/img/femme_78.jpg" },
    { id: 79, name: "Hummel HMLTIF SEAMLESS Sport Top XL pink with Damen", price: "42.77€", image: "/img/femme_79.jpg" },
    { id: 80, name: "Hummel SHAPPING SEAMLESS Sport Top taille S green", price: "38.80€", image: "/img/femme_80.jpg" },
    { id: 81, name: "Hummel MT energy Sportivo Donna Senza Cuciture", price: "37.56€", image: "/img/femme_81.jpg" },
    { id: 82, name: "Maillot Denmark women domicile UEFA® Euro women 2021 taille L/S/M/XL", price: "68.80€", image: "/img/femme_82.jpg" },
    { id: 83, name: "Hummel HMLLogo T-shirt Cotton black - marina blue sport taille L/S/M", price: "57.56€", image: "/img/femme_83.jpg" },
    { id: 84, name: "Hummel Legging Sport sans coûture diamond blue - purple taille XS/S/M/L/XL", price: "87.56€", image: "/img/femme_84.jpg" },
    { id: 85, name: "Maillot Hummel femme HMLCore black", price: "68.80€", image: "/img/femme_85.jpg" },
    { id: 86, name: "Maillot Hummel femme HMLCore orange", price: "57.56€", image: "/img/femme_86.jpg" },
    { id: 87, name: "Hummel HMLAuthentic Polo woman Functional white", price: "37.96€", image: "/img/femme_87.jpg" },
    { id: 88, name: "Hummel HMLCore Polo woman Functional white", price: "48.70€", image: "/img/femme_88.jpg" },
    { id: 89, name: "Hummel HMLgo Logo Sweat à capuche femme", price: "62.06€", image: "/img/femme_89.jpg" },
    { id: 90, name: "Hummel Lmove Sweatshirt classic femmme", price: "57.37€", image: "/img/femme_90.jpg" },
    { id: 91, name: "Hummel FIRST Seamless T-shirt à manches longues vintage indigo", price: "80.70€", image: "/img/femme_91.jpg" },
    { id: 92, name: "Hummel Football Kit Doré Standard de Liège Concept Pro League", price: "83.06€", image: "/img/femme_92.jpg" },
    { id: 93, name: "Hummel Denmark Veste d'entraînement Line Up Euro Féminin 2022 Rouge Large", price: "75€", image: "/img/femme_93.jpg" },
    { id: 94, name: "Diamond DMDSeamless sport athletic sans coûture grise Dri-Fit L/S/M", price: "95.37€", image: "/img/femme_94.jpg" },
    { id: 95, name: "Diamond DMDFIT Sportive woman cocktail gradient Dri-Fit L/S/M", price: "55.56€", image: "/img/femme_95.jpg" },
    { id: 96, name: "Diamond DMDTRAINING Legging crop fit female sportive wear Black", price: "68.07€", image: "/img/femme_96.jpg" },
    { id: 97, name: "Diamond DMDAuthentic legging Sport athletic edition Gray and Blue", price: "48.53€", image: "/img/femme_97.jpg" },
    { id: 98, name: "Diamond TIF basic sport woman dressed active Wear true beige", price: "43.31€", image: "/img/femme_98.jpg" },
    { id: 99, name: "Diamond DMDLTE Woman Sportwear fitness driftwood true Black", price: "70.39€", image: "/img/femme_99.jpg" },
];

async function main() {
    console.log("Seeding produits pour femmes...");

    await prisma.femmes.deleteMany();

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
