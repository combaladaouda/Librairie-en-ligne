  /* AFFICHAGE DANS LE PANIER */



let baliseAjout = document.querySelector(".ajout");

function afficher(){
  if(localStorage.getItem("panier")){
    const ajout = JSON.parse(localStorage.getItem("panier"));
    ajout.forEach(element => {
      baliseAjout.innerHTML +=`<div class="contenue-article">
      <div class="livre"><img src="${element.image}" alt="" class="img-doc"></div>
      <div class="titre-livre"><p class="titre-li">${element.titre}</p></div>
      <div class="nom"><p class="auteur">${element.nom}</p></div>
      <div class="prix"><p class="price" >${element.prix}</p></div>
      <button class="retirer" id="${element.id}">Retirer</button> 
    </div>`; 
  })

  document.querySelectorAll(".retirer").forEach(item=>item.addEventListener("click", event=>{
    if(confirm("voulez-vous annuler ?")){
      const id = event.target.id;
      event.target.closest(".contenue-article").remove();
      let allPanier = JSON.parse(localStorage.panier).filter(el=>el.id!=id);
      localStorage.setItem("panier", JSON.stringify(allPanier));
      window.location.reload()
    }
    
  }))

  }
} 
afficher();

/* const retirePanier = ()=>{
  document.querySelectorAll(".retirer").forEach(item=>item.addEventListener("click", event=>{
    const id = event.target.id;
    event.target.closest(".contenue-article").revome();
    let allPanier = JSON.parse(localStorage.panier).filter(el=>el.id!=id);
    localStorage.setItem("panier", allPanier);
  }))
};
retirePanier(); */

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

 




