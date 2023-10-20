const button = document.querySelector(".button");
const countPanier = JSON.parse(localStorage.getItem("panier"))
console.log(countPanier);

const count = document.querySelector(".count");
count.textContent = countPanier === null ? 0 : countPanier.length;

console.log(button);
button.addEventListener("click", (e) =>{

    e.preventDefault()
    console.log("bonjour");
    let enfant = e.target;
    let parent = enfant.closest(".contenue-article");
    let a = parent.querySelector(".img-doc").src;
    let b = parent.querySelector(".titre-li").textContent;
    let c = parent.querySelector(".auteur").textContent;
    let d = parent.querySelector(".price").textContent; 

    console.log(enfant);


    let panier = localStorage.getItem("panier");
    let article = {
        a: a,
        b: b,
        c: c,
        d: d,
    }
    console.log(article);

    if(panier === null){
        panier = [];
        panier.push(article);
        localStorage.setItem("panier", JSON.stringify(panier));
        window.location.reload();
    }else{
        panier = JSON.parse(panier)
        panier.push(article);
        localStorage.setItem("panier", JSON.stringify(panier));
        window.location.reload();
    }
    console.log(panier);
})

