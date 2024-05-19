import mongoose from "mongoose";
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name:{type:String,required:true},
    decription:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String},
    price:{type:Number,required:true}
},
{timestamps:true}
);

export default mongoose.model('Product',productSchema,'products')