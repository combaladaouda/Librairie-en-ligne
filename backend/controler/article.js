import Article from "../model/article.js";

class ArticleControler{
    static async create(requete, reponse){
        try {
            const newArticle = await Article.create(requete.body);
            return reponse.status(202).json({message:'Article ajouter !', data:newArticle});            
        } catch (error) {
            reponse.status(500).json({message:'Erreur survenue', error});
        }
    }
}

export default ArticleControler;

