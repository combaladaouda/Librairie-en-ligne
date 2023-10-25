import express from "express";
import cors from "cors";
import bdConnect from "./database/bd.js";
import RouterUser from "./root/user.js";
import RouterLogin from "./root/login.js";
import RouterArticle from "./root/article.js";





const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/v.1/user', RouterUser);
app.use('/api/v.1/auth', RouterLogin);
app.use('/api/v.1/article', RouterArticle);


const port = process.env.PORT || 4010;


bdConnect()
.then(()=>{
    console.log("connexion effectuer avec succes");
    app.listen(port,()=>{
        console.log("server lencer sur le port "+port);
    })
})
.catch(error=>{
    console.log("connexion echouée", error);
})

