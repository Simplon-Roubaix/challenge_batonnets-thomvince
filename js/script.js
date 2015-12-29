$affichage = document.getElementById("affichage");
$combien = document.getElementById("combien");
$bouton = document.getElementById("bouton");
// Nombre de bâtons actuellement sur le jeu
nb = 25;

// Affiche les 'nb' bâtons dans la <div id="affichage"></div>
function afficher() {
    batons = "";
    for (i = 0; i < nb; i++) {
        batons += "| ";
    }
    $affichage.innerHTML = batons;
}

// Affiche les bâtons de départ
afficher();

// Retire autant de bâtons que la valeur du champ texte
function retirer() {
    nb -= parseInt($combien.value);

    // Met à jour les bâtons affichés
    afficher();
}
