
/********************************************déplacement du canard********************************************/

var container = document.querySelector('#container'); //selectionne le premier ID container de notre html 
var movingDuck = document.querySelector('#duck'); //selectionne le premier ID duck de notre html 
var speed = 60; //indique la vitesse de notre duck
movingDuck.style.top = '0px'; //position de notre duck en haut
movingDuck.style.left = '0px';  // position de notre duck à gauche


document.addEventListener('keydown', (event) => { // associer les touches de notre clavier au déplacement du duck 
    var top = parseInt(movingDuck.style.top); //pour convertir le string en number
    var left = parseInt(movingDuck.style.left); //pour convertir le string en number
  
    if (event.key == 'ArrowRight') { //touche pour aller vers la droite
      if(left < 720) {
        left += speed; 
      }
    }
    if (event.key == 'ArrowLeft') { //touche pour aller vers la gauche
      if(left > 0) {
        left -= speed; 
      }
    }
    if (event.key == 'ArrowDown') { //touche pour aller vers le bas
      if(top < 420) {
        top += speed; 
      }
    }
    if (event.key == 'ArrowUp') { //touche pour aller vers le haut
      if (top > 0) {
        top -= speed;
      }
    }
  
    movingDuck.style.left = left + 'px';
    movingDuck.style.top = top + 'px';
  });

/********************************************Variable utile********************************************/

var canard = document.querySelector('.canardVolant'); //selectionne la première classe canardVolant de notre html 
var chasseurPoint = document.querySelector('.ScoreDuChasseur');
var CanardPoint = document.querySelector('.ScoreDuCanard');
var TempsQuiPasse = document.querySelector('.TempsEcoule');

/********************************************Variable de base a 0********************************************/

var scoreCanard = 0; //score de base a 0
var scoreChasseur = 0;
var temps = 0;

var Minuteur = setInterval(ajoutTemps, 1000); //definit le temps
var AjoutPoint= setInterval(ajoutPDuck, 10000); //definit le temps pour les points du canard
var timeOut = setTimeout(finDuJeu, 120000); // definit le temps de la partie 120s


/********************************************1 point pour chaque clic********************************************/

function ajoutPHunt(){ //fonction pour ajouter les points au chasseur
    scoreChasseur++;
    chasseurPoint.innerText = scoreChasseur ; //inserer les points a leurs place
}
canard.addEventListener('click', ajoutPHunt);

/********************************************1 point tout les 10 sec********************************************/

function ajoutPDuck(){ //fonction pour ajouter les points au canard
    scoreCanard++; 
    CanardPoint.innerText = scoreCanard;//inserer les points a leurs place
  
}

/********************************************Fonction temps********************************************/

function ajoutTemps() { //fonction pour que le temps defile 
    temps++;
    TempsQuiPasse.innerText = temps; //inserer le temps dans le html
}

/********************************************Fonction fin du jeu ********************************************/

function finDuJeu() {
    clearInterval(Minuteur); //stopper le temps
    clearInterval(AjoutPoint); //stopper les points du canard a la fin des 120s
    canard.removeEventListener('click', ajoutPHunt);

/********************************************Pour afficher les vainqueurs yeah********************************************/

var result = document.querySelector('.resultat');
var resultat = "";

if (scoreCanard > scoreChasseur ) {
  resultat = "THE WINNER IS DUCK !!!!!!";
}if (scoreCanard < scoreChasseur) {
  resultat = "THE WINNER IS HUNT !!!!!!";
}if (scoreCanard == scoreChasseur) {
  resultat = "égalité :(";
}

result.innerText = resultat;

}





