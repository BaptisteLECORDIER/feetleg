// -------------------------------------------------------------
// Buttons

const buttons = document.querySelectorAll('.btn');

// Fonction permettant d'afficher via une animation du boutton lorsque ce dernier est survolé par le curseur de la sourie
function mouse_over () {
    this.classList.remove('default');
    this.classList.add('btn_hover_translation');
} 

// Boucle permettant de gérer les évènements de types survole à tous les éléments boutons
for (var button of buttons) {
    button.addEventListener("mouseover", mouse_over);
}


// -------------------------------------------------------------