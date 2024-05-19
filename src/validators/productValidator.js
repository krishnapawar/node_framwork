import Joi from "joi";
import fs from "fs";
const storeValidator = (req,res,next)=>{
    const storeSchema = Joi.object({
        name:Joi.string().required(),
        decription:Joi.string().required(),
        category:Joi.string().required(),
        price:Joi.number().required(),
        image:Joi.string(),
    }); 
    const { error } = storeSchema.validate(req.body);
    if (error) {
        const filepath= req.file.path.replace("\\","/");
        fs.unlink(`${appRoot}/${filepath}`,(err)=>{
            if(err){
                return next(err);
            }
        });
        return next(error);
    }
    return next();
}

export {storeValidator}