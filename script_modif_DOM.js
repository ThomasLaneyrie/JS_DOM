// Modification n°1
// Écris une fonction changeTitles() qui va :
// Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
// Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
// Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.

function changeTitles() {
document.getElementsByTagName("h1")[0].textContent = "Ce que j'ai appris à THP";
document.querySelectorAll("p")[1].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !" ;
}
changeTitles();

// Modification n°2
// Ecris une fonction changeCallToActions() qui va:
// Changer le texte du bouton "Main call to action" en "OK je veux tester !"
// Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
// Changer le texte du bouton "Secondary action" en "Non Merci"
// Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"

function changeCallToActions() {
document.querySelectorAll("a")[4].textContent = "OK je veux tester !";
document.querySelectorAll("a")[4].href = "http://www.thehackingproject.org";
document.querySelectorAll("a")[5].textContent = "Non merci";
document.querySelectorAll("a")[5].href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();

// Modification n°3
// Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :
// Change "Album" par "The THP Experience" ;
// Change la taille du texte pour le passer en 2em.

function changeLogoName() {
document.querySelectorAll("a")[3].childNodes[3].textContent = "The THP Experience";
document.querySelectorAll("a")[3].childNodes[3].style.fontSize = "2em";
}
changeLogoName();


// Modification n°4
// Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :
// let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
// Une petite boucle des familles va être utile ici.

function populateImages(child, img) {
 child.querySelector(".card-img-top").src = img;
}

var imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
cards = document.querySelectorAll(".col-md-4");
for (let child = 0; child <= cards.length - 1; child++) {
  let random = Math.floor(Math.random() * imagesArray.length);
  populateImages(cards[child], imagesArray[random]);
}

// Modification n°5
// Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. Je donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de ne pas les lire.

function deleteLastCards() {
  for (let count = 0; count <= 2; count++) {
    let cards = document.querySelectorAll(".col-md-4");
    let last_card = cards.length-1;
    cards[last_card].remove();
  }
}
deleteLastCards();

// Modification n°6
// Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :
// Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
// Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
// Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
// Essaye de mettre ça dans une boucle.

function changeCardsText() {
  for (let card = 0; card <=2; card++) {
    let cardToChange = document.querySelectorAll(".col-md-4")[card];
    switch (card) {
      case 0: 
        cardToChange.querySelector("p").textContent = "L'’'HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
        cardToChange.querySelector(".card-img-top").src = "https://img.icons8.com/color/480/000000/html-5.png";
        break;
      case 1:
        cardToChange.querySelector("p").textContent = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
        cardToChange.querySelector(".card-img-top").src = "https://img.icons8.com/color/480/000000/css3.png";
        break;
      case 2:
        cardToChange.querySelector("p").textContent = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype"
        cardToChange.querySelector(".card-img-top").src = "https://img.icons8.com/color/480/000000/javascript.png";
        break;
    }
  }
}
changeCardsText();

// Modification n°7
// Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !

function changeViewButtons() {
  cards = document.querySelectorAll(".btn-group");
  for (let card = 0; card <= cards.length-1; card++) {
    console.log(cards[card].firstElementChild.classList.remove("btn-outline-secondary"));
    console.log(cards[card].firstElementChild.classList.add("btn-outline-success"));
  }
}
changeViewButtons();

// Modification n°8
// Allez, on finit sur une modification un peu tordue :
// Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
// Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
// Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?).

function changeViewButtons() {
  const newRow = document.createElement("div");
  const dad = document.querySelectorAll(".container")[3];
  dad.appendChild(newRow); 
  newRow.classList.add("row");

  cardJS = document.querySelectorAll(".col-md-4")[2];
  newRow.appendChild(cardJS);
  console.log(cardJS);
}
changeViewButtons();