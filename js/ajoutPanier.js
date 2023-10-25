const button = document.querySelectorAll(".button");
const countPanier = JSON.parse(localStorage.getItem("panier"))
const count = document.querySelector(".count");
console.log(button);


//count.textContent = countPanier === null ? 0 : countPanier.length;
//console.log(button);
button.forEach(btn =>btn.addEventListener("click", event =>{
    const sibling = event.target.id;
    console.log(sibling);
    const contenueArticle = event.target.closest(".contenue-article");
    const image = contenueArticle.querySelector(".img-doc").src;
    const titre = contenueArticle.querySelector(".titre-li").textContent;
    const nom = contenueArticle.querySelector(".auteur").textContent;
    const prix = contenueArticle.querySelector(".price").textContent;

    const newPanier = {image,titre,nom,prix:Number(prix)}
    console.log(newPanier);
    

}))

const voirPanier = (balise)=>{
    const nombrPanier = localStorage.panier ? JSON.parse(localStorage.panier).length:0
    balise.textContent = nombrPanier <= 5 ? nombrPanier :"+5"
   
}

voirPanier(count)