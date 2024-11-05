let offres = [        // création tableau pour les offres d'accueil
    {
        nom: "Composition au choix",
        image: "images/presentation/composition1.jpg",
        description: "Composez le cadeau de Noël idéal pour vous ou vos proches en choisissant 2 de nos eaux florales parmi nos produits d'exception",
        prix: 35,
        produitvedette: 1
    }
]

let EauxFlorales = [        // création du tableau EauxFlorales pour stocker les différents prouits 
{
    nom: "Eau Florale d'Immortelle",
    image: "images/eaux-florales/eau-immortelle.JPG",
    description: "L'hydrolat d'immortelles sauvages est particulièrement conseillé pour son action circulatoire, aux peaux fragiles couperosées, congestionnées, irritées, avec marques d'acné, rougeurs et cernes.",
    prix: 15,
    produitvedette: 1
    
},
{
    nom: "Eau Florale de Romarin",
    image: "images/eaux-florales/eau-romarin.JPEG",
    description: "Excellent pour combattre la fatigue, booster l'immunité et drainer le foie.",
    prix: 15,
    produitvedette: 0
    
},
{
    nom: "Eau Florale de Myrte",
    image: "images/eaux-florales/eau-myrte.JPEG",
    description: "L'hydrolat aromatique de myrte stimule les voies respiratoires, purifie la peau et peut aussi s'utiliser en soin pour les cheveux.",
    prix: 15,
    produitvedette: 0
    
},
{
    nom: "Eau Florale de Petit Grain Bigaradier",
    image: "images/eaux-florales/eau-oranger.JPG",
    description: "Réputée pour ses vertus adoucissantes, l’eau florale de Bigaradier apporte réconfort à la peau. Elle révèle de nombreuses qualités que réclament tout particulièrement les peaux sèches : apaisement, hydratation et souplesse.",
    prix: 15,
    produitvedette: 0
},
{
    nom: "Eau Florale de Laurier",
    image: "images/eaux-florales/eau-laurier.JPEG",
    description: "Les propriétés antibactériennes et anti-inflammatoires de l’hydrolat de laurier en font un excellent choix pour les soins buccaux et les gargarismes.",
    prix: 15,
    produitvedette: 0
},
{
    nom: "Eau Florale d'Eucalyptus",
    image: "images/eaux-florales/eau-eucalyptus.JPEG",
    description: "Revitalisation de la peau : cet hydrolat est particulièrement bénéfique pour la peau, grâce à ses propriétés astringentes et purifiantes. Il aide à resserrer les pores et à clarifier le teint, le rendant parfait pour les peaux grasses ou sujettes à l'acné.",
    prix: 15,
    produitvedette: 0
},
{
    nom: "Eau Florale de Lavandula",
    image:"images/eaux-florales/eau-lavande.JPG",
    description: "Adoucissante, régénérante et rafraîchissante, l'eau florale de lavande est pertinente pour apaiser les petites irritations, les rougeurs, ou les coups de soleil légers. Elle est anti-infectieuse, anti-bactérienne, anti-inflammatoire, répulsive, nettoyante et cicatrisante.",
    prix: 15, 
    produitvedette: 0
},
{
    nom: "Eau Florale de Lentisque",
    image:"images/eaux-florales/eau-lentisque.JPEG",
    description: "En plus de ses bienfaits dermatologiques, l'hydrolat de lentisque pistachier par ses propriétés tonifiantes et diurétiques légères le rendent utile pour améliorer l'aspect de la peau en cas de cellulite.",
    prix: 15,
    produitvedette: 0
}
]
let HuilesEssentielles = [          // création du tableau HuilesEssentielles pour stocker les différents prouits
    {
        nom: "Huile Essentielle d'Eucalyptus",
        image: "images/huiles-essentielles/huile-eucalyptus.JPEG",
        description:"Inhalée attentivement, l’huile essentielle d’eucalyptus surprend par ses effets immédiats sur la sphère respiratoire. Elle rafraîchit et semble dégager tout de suite les poumons en provoquant bien souvent l’expectoration.",
        prix: 25,
        produitvedette: 0
    },
    {
        nom: "Huile Essentielle de Myrte",
        image: "images/huiles-essentielles/huile-myrte.JPEG",
        description:"Respirer cette huile essentielle portera fortement sur l’appareil respiratoire et la région ORL. Les effets mucolytiques et expectorants ne sont pas violents. Ces régions paraissent rafraichies, vivifiées, dégagées et assainies.",
        prix: 25,
        produitvedette: 1
    },
    {
        nom: "Huile Essenteille de Lavande",
        image: "images/huiles-essentielles/huile-lavandula.JPEG",
        description:"Les effets sur le psychisme sont notables. L’arôme envahit immédiatement la tête, la région ORL, l’appareil respiratoire avec parfois l’impression d’être enserré.",
        prix: 25,
        produitvedette: 0
    }
];


let divItems = document.body.querySelector("#product-items");
document.querySelector('.btn-eau-florale').onclick = function maFonction1(){    // fonction se lancant quand le bouton bouton eau floraleest cliqué
    createProductCard(EauxFlorales);
}
document.querySelector('.btn-huile-essentielle').onclick = function maFonction2(){      // fonction se lancant quand le bouton bouton huile essentielle est cliqué
    createProductCard(HuilesEssentielles);
}
function createProductCard(tableau){        // fonction qui créer une carte de produit en suivant le design pré-défini dans le css
    divItems.innerHTML = "";
    for (let EauFlorale of tableau)
    {
        let div = document.createElement("div");
        div.className = "product-card";
        let img = document.createElement("img");
        let p1 = document.createElement("h2");
        let p2 = document.createElement("p");
        let p3 = document.createElement("h3");
        let btpanier = document.createElement("button");

        img.src = EauFlorale.image;
        img.alt = EauFlorale.description;
        img.className="img-product";
        p1.textContent = EauFlorale.nom;
        p2.textContent = EauFlorale.description;
        p3.textContent = EauFlorale.prix + "€";
        btpanier.classList.add("btn-produit");
        btpanier.textContent = "Ajouter au Panier";

        div.append(img);
        div.append(p1);
        div.append(p2);
        div.append(p3);

        div.append(btpanier);
        divItems.append(div);
    }
    var selection = document.querySelector('#products-section') !== null;
    if(selection){
        document.querySelector('#products-section').style.display = "none";
    }
}
let heroTitle = document.querySelector('.hero-section h2');

document.querySelector('.btn-eau-florale').onclick = function() {
    createProductCard(EauxFlorales);
    heroTitle.textContent = "Nos Eaux Florales"; // Change le titre pour les eaux florales
}

document.querySelector('.btn-huile-essentielle').onclick = function() {
    createProductCard(HuilesEssentielles);
    heroTitle.textContent = "Nos Huiles Essentielles"; // Change le titre pour les huiles essentielles
}
document.querySelector('.btn-eau-florale').addEventListener('click', function() {
    document.getElementById('map').style.display = 'none';
    createProductCard(EauxFlorales);
});

document.querySelector('.btn-huile-essentielle').addEventListener('click', function() {
    document.getElementById('map').style.display = 'none';
    createProductCard(HuilesEssentielles);
});