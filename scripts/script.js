const allDate = ["04.04", "05.04", "19.04", "21.04", "22.04", "02.05", "03.05", "05.05", "08.05", "09.05", "18.05", "20.05", "23.05", "27.05", "28.05", "30.05", "01.06", "03.06", "Références"];

//Listes des dates/sections textes, la première est 0
const header = document.querySelector(".header");
const left = document.getElementById("left");

//On récupére toutes les section donc chaque parties de texte
const allSections = document.querySelectorAll('.section');

let allSectionsPositions = [];

//On met toutes les positions du haut de chaque bloc dans un tableau
allSections.forEach(section => {
  allSectionsPositions.push(section.offsetTop);
});

//On récupère tous les liens de la frises 
const allFriseLink = document.querySelectorAll('.frise a');
console.log(allFriseLink);

//On parcoure tous les liens 
allFriseLink.forEach((friseLink, index) => {
  //Pour chaque lien on creer un évènement click
  friseLink.addEventListener('click', () => {
    //Si on clique on fait scroller l'élément left vers la postition qui convient:
    // on l'obtient grace a l'index et le tableau de position creer au dessus
    left.scrollTo({ top: allSectionsPositions[index], behavior: 'smooth' })
  })
})

//définit un margin à partir du bloc 'class date'
//document.querySelector(".scrollContainer").style.top =
//  header.offsetHeight.toString()+ "px";

//On crée une écouteur d'évènement scroll
left.addEventListener("scroll", () => {
  //On créer une variable qui est le nievau de scroll a partir du bas du header
  let headerBottomScrollPosition = left.scrollTop + header.offsetHeight;
  
  //On créer un nouveau tableau qui est l'inverse du allSectionsPositions (en gros le premier élément devient le dernier)
  //On fait ce changement pour qu'on verifie d'abord la distance la plus grande et ensuite les plus petites
  const reverseAllSectionsPositions = allSectionsPositions.slice().reverse();

  //On fait une boucle qui pars de 0 et qui continu jusqu'au nompre d'éléments dans reverseAllSectionsPositions
  for (let i = 0; i <= reverseAllSectionsPositions.length; i++) {
    //On regarde si la position actuelle est plus grande que la position de la section que l'on traite actuellement
    if (headerBottomScrollPosition >= reverseAllSectionsPositions[i] - 50) {
      //Si c'est le cas on change la date pour applique la bonne
      document.querySelector(".date").innerHTML = allDate.slice().reverse()[i];
      //Et on arrète la boucle
      break;
    }
  }
});
