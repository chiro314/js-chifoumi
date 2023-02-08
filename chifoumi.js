
const btCommencer = document.getElementById("bt-commencer"); 
const divChoixOrdi = document.getElementById("div-choix-ordi");
const divMessage = document.getElementById("div-message");
const divDejaJoues = document.getElementById('div-deja-joues');
const pNbParties = document.getElementById('p-nb-parties');

const banque = ['assets/img/pierre.png', 'assets/img/papier.png','assets/img/ciseaux.png']; // dans l'ordre "inférieur à" 
const PIERRE = 0;
const PAPIER = 1;
const CISEAUX = 2;
var numChoixPC = -1;
//var numChoixJoueur = -1;

var nbParties = 0;
var gains = 0;
var pertes = 0;

var partieTerminee = true;
var partieCommencee = false;

//Init choix :
const btsJoueur = document.getElementsByClassName('bt-joueur');

btCommencer.addEventListener("click", function(){
    if(!partieCommencee) {
        partieCommencee = true;
        btCommencer.innerHTML="Partie en cours";
        for(i=0;i<btsJoueur.length;i++) btsJoueur[i].style.border = "2px solid black"; //const firstContent = contents[0];
        partieTerminee = false;
        divChoixOrdi.innerHTML="";
        divMessage.innerHTML="";
        
        numChoixPC = nombreAleatoire = Math.floor(Math.random() * (banque.length - 1));  
    alert("btCommencer / numChoixPC : " + numChoixPC);
        //event.preventDefault(); event.stopPropagation(); console.log(event);
    }
}, false);

const btPierre = document.getElementById("bt-pierre");
const btPapier = document.getElementById("bt-papier");
const btCiseaux = document.getElementById("bt-ciseaux");

btPierre.addEventListener("click", function(){
    if(!partieTerminee){
        partieTerminee = true;
        partieCommencee = false; btCommencer.innerHTML="Commencer une partie";
        btPierre.style.border = "5px solid green";
        divChoixOrdi.innerHTML='<img class="img-pc" src="'+banque[numChoixPC]+'">' ;
        analyser(PIERRE);
    }
}, false);

btPapier.addEventListener("click", function(){
    if(!partieTerminee){
        partieTerminee = true;
        partieCommencee = false; btCommencer.innerHTML="Commencer une partie";
        btPapier.style.border = "5px solid green";
        divChoixOrdi.innerHTML='<img class="img-pc" src="'+banque[numChoixPC]+'">' ;
        analyser(PAPIER);
    }
}, false);

btCiseaux.addEventListener("click", function(){
    if(!partieTerminee){
        partieTerminee = true;
        partieCommencee = false; btCommencer.innerHTML="Commencer une partie";
        btCiseaux.style.border = "5px solid green";
        divChoixOrdi.innerHTML='<img class="img-pc" src="'+banque[numChoixPC]+'">' ;
        analyser(CISEAUX);
    }
}, false);

function analyser(numChoixJoueur){
    if(numChoixJoueur == numChoixPC) {
        divMessage.innerHTML="Egalité !";
    }
    else if(((numChoixJoueur +1) % banque.length) == numChoixPC) {
        divMessage.innerHTML="Perdu";
        pertes+=1;
    }
    else{
        divMessage.innerHTML="Gagné !!";
        gains+=1;
    }
    nbParties+=1;
    afficherScore(numChoixJoueur);
}

const pGains = document.getElementById("p-gains");
const pPertes = document.getElementById("p-pertes");
const divHisto = document.getElementById("div-histo");

function afficherScore(numImageJoueur){
    pGains.innerHTML= gains;
    pPertes.innerHTML= pertes;
    pNbParties.innerHTML= nbParties + " partie(s)"

    //divHisto.innerHTML+='<img class="img-histo" src="'+banque[numImageJoueur]+'">' + '<img class="img-histo" src="'+banque[numChoixPC];

    divHisto.innerHTML+='<div class="row"><div class="col-6"><img class="img-histo" src="'
    + banque[numImageJoueur]
    + '"></div><div class="col-6"><img class="img-histo" src="'
    + banque[numChoixPC]
    + '"></div></div>' ;
    
}

