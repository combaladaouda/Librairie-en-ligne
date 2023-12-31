import User from "../model/user.js";
class LoginControler{
    static async login(requete, reponse){
        try {
            if(!requete.body.email || !requete.body.password) return reponse.status(401).json({message:'Tous les champs sont obligatoire'});
            const user = await User.findOne({email:requete.body.email});
            if(!user) return reponse.status(202).json({message:"Mot de passe ou email incorrecte !"});
            if(user.password != requete.body.password) return reponse.status(202).json({message:"Mot de passe ou email incorrecte !"});
            return reponse.status(202).json({message:'Connexion effectuer !', data:{password:requete.body.password, email:requete.body.email}});           
        } catch (error) {
            reponse.status(500).json({message:'Erreur survenue', error});
        }
    }
}

export default LoginControler;

