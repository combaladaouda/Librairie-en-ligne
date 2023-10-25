import mongoose from "mongoose";
const bdConnect = ()=>mongoose.connect("mongodb+srv://librairie:librairie@cluster0.w7l3cwu.mongodb.net/?retryWrites=true&w=majority")

export default bdConnect;


