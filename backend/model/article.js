import { Schema,model } from "mongoose";
const Article = new Schema( {
    title: {type: String, required: true },
    autor: {type: String, required: true },
    image: {type: String, required: true },
    price: {type: String, required: true },
},
{timestamps:true});

export default model('article',Article);