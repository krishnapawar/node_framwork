import { string } from "joi";
import mongoose from "mongoose";
const categorySchema =new mongoose.Schema({
    name:{type:string,required:true},
    image:{type:string},
    type:{type:string,default:"category"}
});

export default mongoose.model('Category',categorySchema,'categories');