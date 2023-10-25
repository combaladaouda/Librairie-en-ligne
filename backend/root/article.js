import  express, { Router }  from "express";
import ArticleControler from "../controler/article.js";
const RouterArticle = express.Router();

RouterArticle.use("/create", ArticleControler.create);


export default RouterArticle;