document.querySelector("#pierre").onclick = jouer;
document.querySelector("#papier").onclick = jouer;
document.querySelector("#ciseaux").onclick = jouer;

const CHOIX = ["pierre", "papier", "ciseaux"];
const GAGNE_CONTRE = { 
  pierre: "ciseaux",
  papier: "pierre",
  ciseaux: "papier"
};

function jouer(event) {
  const jeu = document.querySelector("#jeu");
  const message = document.querySelector("#message");

  const joueur = event.target.dataset.choix;
  const ordinateur = CHOIX[Math.floor(Math.random() * 3)];

  let resultat = "Défaite";
  if (joueur === ordinateur) {
    resultat = "Égalité";
  } else if (GAGNE_CONTRE[joueur] === ordinateur) {
    resultat = "Victoire";
  }

  document.querySelector("#choix-joueur").src = `images/${joueur}.svg`;
  document.querySelector("#choix-ordinateur").src = `images/${ordinateur}.svg`;

  jeu.dataset.joueur = joueur;
  jeu.dataset.ordinateur = ordinateur;
  jeu.dataset.resultat = resultat;
  message.textContent = resultat;

  document.querySelector("#choix").hidden = true;
  document.querySelector("#resultat").hidden = false;
  message.focus();
}