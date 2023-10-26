

const formulaire = document.querySelector('form');
formulaire.addEventListener('submit',e=> {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    const data = new FormData();
    data.append('email',email);
    data.append('password',password);
    fetch('http://localhost:4010/api/v.1/auth/login',{
        method:"POST",
        body:new URLSearchParams(data)
    })
    .then(res =>res.json())
    .then(succes =>{
        if(succes.data){
            alert(succes.message);
            localStorage.setItem('sessions',JSON.stringify(succes.data))
            window.location.href="../corporates/acceuil.html";
        }else{
            alert(succes.message)
        }
    })
})