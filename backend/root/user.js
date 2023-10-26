import  express, { Router }  from "express";
import UserControler from "../controler/user.js";
const RouterUser = express.Router();

RouterUser.use("er", UserControler.create);


export default RouterUser;