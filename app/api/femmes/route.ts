import { NextResponse } from 'next/server';

const products = [
    { id: 1, name: "Brassière de sport sans coûture taille (S, L, W) jersey woman", price: "103€", image: "/img/femme_1.jpg" },
    { id: 2, name: "Hummel set sport sans coûture taille (S, L, W) jersey woman", price: "143.57€", image: "/img/femme_2.jpg" },
    { id: 3, name: "Danemark maillot Gardienne CDM Féminin 2023 taille (S, L, W)", price: "193€", image: "/img/femme_3.jpg" },
    { id: 4, name: "Hummel first T-shirt sans coûture à manches longues noir jersey", price: "123.35€", image: "/img/femme_4.jpg" },
    { id: 5, name: "Hummel débardeur classique rose désert à logo taille medium", price: "113.77€", image: "/img/femme_5.jpg" },
    { id: 6, name: "Hummel Tif soutient gorge de sport sans coûture bleu taille medium", price: "133€", image: "/img/femme_6.jpg" },
    { id: 7, name: "Hummel Core Short Noir poly woman", price: "127€", image: "/img/femme_7.jpg" },
    { id: 8, name: "Hummel Legging de sport sans coûture Rose", price: "153€", image: "/img/femme_8.jpg" },
    { id: 9, name: "Hummel Legging taille haute sans coûture", price: "107€", image: "/img/femme_9.jpg" },
    { id: 10, name: "Hummel Seamless T-shirt à manches longues Vert Kaki", price: "100€", image: "/img/femme_10.jpg" },
    { id: 11, name: "Hummel Cuissard Cyclisme sans coûture", price: "125€", image: "/img/femme_11.jpg" },
    { id: 12, name: "Hummel first Legging de sport sans coûtures Rose", price: "144€", image: "/img/femme_12.jpg" },
    { id: 13, name: "Hummel Sweat à capuche doux Noir", price: "139€", image: "/img/femme_13.jpg" },
    { id: 14, name: "Hummel First T-shirt sans coûture à manches courtes", price: "109€", image: "/img/femme_14.jpg" },
    { id: 15, name: "Hummel Sweat à logo à manches long Crème Blanc", price: "175€", image: "/img/femme_15.jpg" },
    { id: 16, name: "Hummel Brassière de sport à maintient lèger deep litchen green", price: "173€", image: "/img/femme_16.jpg" },
    { id: 17, name: "Hummel CamiSeamless sport athletic noir melange crème blanc", price: "132€", image: "/img/femme_17.jpg" },
    { id: 18, name: "Hummel HMLTif soutient gorge de sports sans coûture Noir Top", price: "122€", image: "/img/femme_18.jpg" },
    { id: 19, name: "Hummel T-shirt de sport dusty blue", price: "102€", image: "/img/femme_19.jpg" },
    { id: 20, name: "Hummel veste de sûrvêtement  à liséré Noir", price: "112€", image: "/img/femme_20.jpg" },
    { id: 21, name: "Hummel CamiSeamless sport grise", price: "120€", image: "/img/femme_21.jpg" },
    { id: 22, name: "Hummel T-shirt à manches courtes en coton avec logo noir", price: "162€", image: "/img/femme_22.jpg" },
    { id: 23, name: "Hummel Legging à taille haute ultra stretch avec poche latérale noir", price: "171€", image: "/img/femme_23.jpg" },
    { id: 24, name: "Hummel Legging moullant sans coûture noir sport taille medium", price: "165€", image: "/img/femme_24.jpg" },
    { id: 25, name: "Hummel hmlFirst T-shirt Seamless jersey taille (S, L) beige", price: "114€", image: "/img/femme_25.jpg" },
    { id: 26, name: "Hummel Legacy T-shirt à manches longues unisexe blanc", price: "142.47€", image: "/img/femme_26.jpg" },
    { id: 27, name: "Hummel First Seamless athletic sport black limited edition", price: "177€", image: "/img/femme_27.jpg" },
    { id: 28, name: "T-shirt Handball Femme Hummel Core Xk Noir", price: "192€", image: "/img/femme_28.jpg" },
    { id: 29, name: "Maillot de football féminin poly et coton", price: "101€", image: "/img/femme_29.jpg" },
    { id: 30, name: "Hummel T-shirt Damen Grobe weinrot XS_S taille medium", price: "121€", image: "/img/femme_30.jpg" },
    { id: 31, name: "Hummel Lifestyle collection with Aybuke Pusat", price: "191€", image: "/img/femme_31.jpg" },
    { id: 32, name: "Hummel LULU Seamless sport Scrunch black melange", price: "187€", image: "/img/femme_32.jpg" },
    { id: 33, name: "Hummel Linne black collector edition", price: "173€", image: "/img/femme_33.jpg" },
    { id: 34, name: "Legging Fur Frauen Hummel Mt Saga", price: "151€", image: "/img/femme_34.jpg" },
    { id: 35, name: "Hummel & Nike collab Pro training black edition", price: "168€", image: "/img/femme_35.jpg" },
    { id: 36, name: "Hummel Sport-bh Nathloser with Damen Cléa", price: "156€", image: "/img/femme_36.jpg" },
];

export async function GET() {
    return NextResponse.json(products);
}
