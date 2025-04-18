import { NextResponse } from 'next/server';

export async function GET() {
    const autres = [
        { id: 1, name: "Hummel CORE - Sporta soma Marina Blue & Sky blue", price: "49€", image: "/img/autre_1.jpg" },
        { id: 2, name: "Hummel ballon de Handball Bleu marine étoilé", price: "59€", image: "/img/autre_2.jpg" },
        { id: 3, name: "Hummel Baskets Rouge et Or pointure 27 à 43", price: "89€", image: "/img/autre_3.jpg" },
        { id: 4, name: "Hummel brassard Storrelse One Size til holdsport Gris", price: "70€", image: "/img/autre_4.jpg" },
        { id: 5, name: "Hummel Core - Sweat short Unisexe Black", price: "60.77€", image: "/img/autre_5.jpg" },
        { id: 6, name: "Hummel Chaussettes Elite Indoor Low Black - Red", price: "29€", image: "/img/autre_6.jpg" },
        { id: 7, name: "Hummel Unisex Core Armelloses Jersey TragerTop", price: "25€", image: "/img/autre_7.jpg" },
        { id: 8, name: "Hummel Thor Baskets Unisexes Gray", price: "20.77€", image: "/img/autre_8.jpg" },
        { id: 9, name: "Hummel LEGACY T-Shirt à manches longues Blue nights", price: "38€", image: "/img/autre_9.jpg" },
        { id: 10, name: "Hummel NET Browse sportwear White", price: "21€", image: "/img/autre_10.jpg" },
        { id: 11, name: "Hummel NET Browse sportwear sweat Gray", price: "20.57€", image: "/img/autre_11.jpg" },
        { id: 12, name: "Hummel Pantalon Jogging Unisexe Bleu", price: "42€", image: "/img/autre_12.jpg" },
        { id: 13, name: "Hummel Ballon Blade Pro Match FIFA Quality Pro Blanc_Noir_Doré Taille Ball SZ", price: "32.77€", image: "/img/autre_13.jpg" },
        { id: 14, name: "Hummel 4Pack Triple Stripe CREW SportSocken Blue & Red & Yellow & Green", price: "15.57€", image: "/img/autre_14.jpg" },
        { id: 15, name: "Hummel 7Pack Triple Stripe CREW SportSocken Green & Blue & Red & Yellow", price: "27.33€", image: "/img/autre_15.jpg" },
        { id: 16, name: "Hummel Legacy Sweat à chevron noir Black", price: "52.87€", image: "/img/autre_16.jpg" },
        { id: 17, name: "Hummel Chaussure aeroFly Blanc & Grisé_orangé", price: "65.87€", image: "/img/autre_17.jpg" },
        { id: 18, name: "Hummel HMLPRECISION Light 350 football White_Green", price: "19.43€", image: "/img/autre_18.jpg" },
        { id: 19, name: "Hummel Handball chaussures Algiz White", price: "53.78€", image: "/img/autre_19.jpg" },
        { id: 20, name: "Hummel HMLAEROFLY Light 290 Pink & Black", price: "21.87€", image: "/img/autre_20.jpg" },
        { id: 21, name: "Hummel Home Kit Football Vitality Black & Yellow", price: "69.79€", image: "/img/autre_21.jpg" },
        { id: 22, name: "Hummel CORE Sac à dos biking red_rasperry sorbet", price: "15.13€", image: "/img/autre_22.jpg" },
        { id: 23, name: "Hummel Slimmer Stadil Baskets basses unisexes Noir", price: "33.80€", image: "/img/autre_23.jpg" },
        { id: 24, name: "Hummel CORE BALL Sac à dos true blue and black", price: "19.99€", image: "/img/autre_24.jpg" },
        { id: 25, name: "Hummel Home Kit Collection Football Vitality Black & Yellow", price: "87.87€", image: "/img/autre_25.jpg" },
        { id: 26, name: "Hummel Vintage Football boots Black and Yellow", price: "63.09€", image: "/img/autre_26.jpg" },
        { id: 27, name: "Hummel Kilmarnock F.C Football Kit 2020", price: "25.69€", image: "/img/autre_27.jpg" },
        { id: 28, name: "Hummel Chaussette Football Stanno Victory VBLK Black", price: "37.37€", image: "/img/autre_28.jpg" },
        { id: 29, name: "Hummel Valise à roulettes pour voyage Noire", price: "73.78€", image: "/img/autre_29.jpg" },
        { id: 30, name: "Hummel CORE Sac de Sport biking red_rasperry sorbet", price: "50.50€", image: "/img/autre_30.jpg" },
        { id: 31, name: "Hummel CORE Short Unisexe Rouge", price: "42.51€", image: "/img/autre_31.jpg" },
        { id: 32, name: "Hummel Denmark DBU Away Kids Unisex White", price: "62.72€", image: "/img/autre_32.jpg" },
        { id: 33, name: "Hummel HMLEASY Kids Blue and White active play pro", price: "32.62€", image: "/img/autre_33.jpg" },
        { id: 34, name: "Hummel Power Play pink", price: "92.50€", image: "/img/autre_34.jpg" },
        { id: 35, name: "Hummel VM78 CPH Blue", price: "88.07€", image: "/img/autre_35.jpg" },
        { id: 36, name: "Hummel AEROFLY Light 350", price: "18.06€", image: "/img/autre_36.jpg" },
        { id: 37, name: "Hummel Monaco 86 Baskets de course noir", price: "77.77€", image: "/img/autre_37.jpg" },
        { id: 38, name: "Hummel Chaussette de Football blanc 35-38", price: "59.70€", image: "/img/autre_38.jpg" },
        { id: 39, name: "Hummel FireBall football Noir & Blanc", price: "46.60€", image: "/img/autre_39.jpg" },
        { id: 40, name: "Hummel HMLEASY rokomet orange_white", price: "17.70€", image: "/img/autre_40.jpg" },
        { id: 41, name: "Hummel Sneaker Low asphalt black", price: "28.23€", image: "/img/autre_41.jpg" },
        { id: 42, name: "Hummel Baskets de course noir", price: "31.31€", image: "/img/autre_42.jpg" },
        { id: 43, name: "Hummel HATTRICK chaussure de foot à crampons rouge", price: "23.23€", image: "/img/autre_43.jpg" },
        { id: 44, name: "Hummel Chaussure VM78 CPH Nylon Noir_Blanc pointure 45", price: "36.27€", image: "/img/autre_44.jpg" },
        { id: 45, name: "Hummel Slimmer Stadil Baskets basses unisexes Blanc", price: "40.40€", image: "/img/autre_45.jpg" },
        { id: 46, name: "Hummel Fallon Baskets Bleu Marine & Rouge", price: "13.23€", image: "/img/autre_46.jpg" },
        { id: 47, name: "Hummel Hive Power Play Baskets Blanc", price: "41.03€", image: "/img/autre_47.jpg" },
        { id: 48, name: "Hummel Monaco 86 Lark Net Golden", price: "26.07€", image: "/img/autre_48.jpg" },
        { id: 49, name: "Hummel HMLenergizer Football White & Blue", price: "12.22€", image: "/img/autre_49.jpg" },
        { id: 50, name: "Hummel MULTIPLAY FLEX Basket basses black", price: "68.18€", image: "/img/autre_50.jpg" },
        { id: 51, name: "Hummel VM78 CPH Nylon Blanc & Bleu Marine", price: "50.01€", image: "/img/autre_51.jpg" },
        { id: 52, name: "Hummel Chaussure de foot à crampons marshmallow", price: "37.29€", image: "/img/autre_52.jpg" },
        { id: 53, name: "Hummel Concept Pro Handball Gray Match ball", price: "19.03€", image: "/img/autre_53.jpg" },
        { id: 54, name: "Hummel Chaussette Voetbalsokken black & golden", price: "27.01€", image: "/img/autre_54.jpg" },
        { id: 55, name: "Hummel Chaussure Coupe du monde 1986 Gris_blanc_bleu", price: "87.03€", image: "/img/autre_55.jpg" },
        { id: 56, name: "Hummel Chaussure Marathon Reach LX Tonal Noir", price: "21.07€", image: "/img/autre_56.jpg" },
        { id: 57, name: "Hummel Ballon energizer Blanc_ Noir_Bleu Ball SZ", price: "10.99€", image: "/img/autre_57.jpg" },
        { id: 58, name: "Hummel Sportsocken kurz Unisex Reflector Tech black", price: "12.83€", image: "/img/autre_58.jpg" },
        { id: 59, name: "Hummel Unisex sneackers Reach LX 800 Block Weiss", price: "25.05€", image: "/img/autre_59.jpg" },
        { id: 60, name: "Hummel Sportschuh Jungen Grobe one size Red", price: "47.88€", image: "/img/autre_60.jpg" },
        { id: 61, name: "Hummel Baskets basses pompeian Red", price: "45.58€", image: "/img/autre_61.jpg" },
        { id: 62, name: "Hummel Baskets Green & White", price: "33.23€", image: "/img/autre_62.jpg" },
        { id: 63, name: "Hummel BrandAlley Black & White", price: "29.29€", image: "/img/autre_63.jpg" },
        { id: 64, name: "Hummel Root Elite Kinderen Laces sport Volleyball gray", price: "58.58€", image: "/img/autre_64.jpg" },
        { id: 65, name: "Hummel Chaussette de football Noir pointure 46 à 49", price: "11.20€", image: "/img/autre_65.jpg" },
        { id: 66, name: "Hummel X vitalamaz retro-sneaker mit PowerPlay Beige", price: "89.89€", image: "/img/autre_66.jpg" },
        { id: 67, name: "Hummel STAR Nogometni Black & Yellow", price: "33.03€", image: "/img/autre_67.jpg" },
        { id: 68, name: "Hummel Slimmer Stadi High White", price: "48.48€", image: "/img/autre_68.jpg" },
        { id: 69, name: "Hummel Baskets de course Noir & Blanc", price: "25.40€", image: "/img/autre_69.jpg" },
        { id: 70, name: "Hummel Gourde Sportif Black & White", price: "10.77€", image: "/img/autre_70.jpg" },
        { id: 71, name: "Hummel Sportbaciai marshmallow", price: "37.47€", image: "/img/autre_71.jpg" },
        { id: 72, name: "Hummel Sportschuh TEIWAZ herren navy_offwhite", price: "25.40€", image: "/img/autre_72.jpg" },
        { id: 73, name: "Hummel Chaussure ST_Power Play CI Blanc & Bleu", price: "72.77€", image: "/img/autre_73.jpg" },
        { id: 74, name: "Hummel Chaussure ST_Power Play RT Blanc & Bleu Marine", price: "83.83€", image: "/img/autre_74.jpg" },
        { id: 75, name: "Hummel Chaussure ST_Power Play RT Blanc & Vert", price: "90.90€", image: "/img/autre_75.jpg" },
        { id: 76, name: "Hummel Mens Essen Low Top Canvas Casual and fashion Sneakers 6 White & Black", price: "66.81€", image: "/img/autre_76.jpg" },
        { id: 77, name: "Hummel Professional Chaussettes de Football Noir pointure 46 à 48", price: "23.89€", image: "/img/autre_77.jpg" },
        { id: 78, name: "Hummel STADIL Flash UNISEX chaussures pour le premier pas earth Red", price: "35.55€", image: "/img/autre_78.jpg" },
        { id: 79, name: "Hummel 471TECSN sac de sport pour femme", price: "64.74€", image: "/img/autre_79.jpg" },
        { id: 80, name: "Hummel Basket Stadil Pro pour enfant Blue Marine", price: "53.53€", image: "/img/autre_80.jpg" },
        { id: 81, name: "Hummel Basket blanc à lacets & à bande contrastante", price: "57.97€", image: "/img/autre_81.jpg" },
    ];

    return NextResponse.json(autres);
}
