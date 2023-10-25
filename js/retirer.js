  /* AFFICHAGE DANS LE PANIER */

const ajout = JSON.parse(localStorage.getItem("panier"));

let html ="";

function afficher(){
     ajout.forEach(element => {
        /* html +=`<div class="contenue-article">
        <div class="livre"><img src="${element.a}" alt="" class="img-doc"></div>
        <div class="titre-livre"><p class="titre-li">${element.b}</p></div>
        <div class="nom"><p class="auteur">${element.c}</p></div>
        <div class="prix"><p class="price" >${element.d}</p></div>
        <button class="button" id="${element.id}">Retirer</button> 
      </div>
      ` */
    })
    document.querySelector(".ajout").innerHTML = html;
    
} 
afficher();

/* RETITRER DU PANIER */

const retiere = document.querySelectorAll('.button');


  retiere.forEach(element=>element.addEventListener("click", (e) =>{


    const panier = localStorage.panier ? JSON.parse(localStorage.panier) : [];
    let id = null;
    if(!panier.length){
      id = 1;
    }else{
      id = panier[panier.length-1].id+1;
    }
    
  }))

 




