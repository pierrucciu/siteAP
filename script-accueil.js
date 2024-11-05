
document.addEventListener("DOMContentLoaded", function() {
    createFeaturedProductCard(EauxFlorales.concat(HuilesEssentielles).concat(offres));
});
function createFeaturedProductCard(tableau){        // fonction pour tester les produits a afficher au chargement de la page
    
    let featuredProducts = tableau.filter(produit => produit.produitvedette === 1);
    createProductCard(featuredProducts);
}