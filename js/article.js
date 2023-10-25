let formulaire = document.getElementsByTagName("form")[0];
formulaire.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const data = new FormData();
    let allInput = e.target.querySelectorAll('input');
    
    allInput.forEach(element=> data.append(element.name, element.value));
    fetch('http://localhost:4010/api/v.1/article/create',{
        method:"POST",
        body:new URLSearchParams(data)
    })
    .then(res =>res.json())
    .then(succes =>{
        if(succes.data){
            alert(succes.message);
        }else{
            alert(succes.message)
        }
    })

    
})