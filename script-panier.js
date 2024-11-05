document.addEventListener('DOMContentLoaded', function() {          //  fonction qui permet d'actualiser le prix par nombre de produit et le prix total 
    let quantites = document.querySelectorAll('.quantite');
    
    function calculerPrixTotal() {
        let prixTotal = 0;

        document.querySelectorAll('tr.survole').forEach(function(row) {
            let quantite = row.querySelector('.quantite').value;
            let prixUnitaire = parseFloat(row.querySelector('.prix-produit').textContent.replace('€', ''));
            let prixTotalArticle = quantite * prixUnitaire;
            
            row.querySelector('.prix-par-nombre-article').textContent = prixTotalArticle.toFixed(2) + '€';
            
            prixTotal += prixTotalArticle;
        });

        document.getElementById('prix-total').textContent = prixTotal.toFixed(2) + '€';
    }
    quantites.forEach(function(quantite) {
        quantite.addEventListener('input', calculerPrixTotal);
    });
    calculerPrixTotal();
});