const ajout = JSON.parse(localStorage.getItem("panier"));

let html ="";

function afficher(){
     ajout.forEach(element => {
        html +=`<div class="contenue-article">
        <div class="livre"><img src="${element.a}" alt="" class="img-doc"></div>
        <div class="titre-livre"><p class="titre-li">${element.b}</p></div>
        <div class="nom"><p class="auteur">${element.c}</p></div>
        <div class="prix"><p class="price" >${element.d}</p></div>
        <button class="button">ajouter</button> 
      </div>
      `
    })
    document.querySelector(".ajout").innerHTML = html;
    
} 

afficher();