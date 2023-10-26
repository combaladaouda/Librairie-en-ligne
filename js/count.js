
const count = document.querySelector(".count");
const voirPanier = (balise)=>{
    const nombrPanier = localStorage.panier ? JSON.parse(localStorage.panier).length:0
    balise.textContent = nombrPanier <= 5 ? nombrPanier :"+5"
   
}
voirPanier(count)