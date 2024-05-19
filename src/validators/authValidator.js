import Joi from "joi";
const registerValidator = (req, res, next)=>{
    const registerValidator= Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        cpassword:Joi.ref('password'),
    });
    const { error } = registerValidator.validate(req.body);
    if (error) {
        return next(error);
    }
    return next();
}

const loginValidator = (req, res, next)=>{
    const loginValidator= Joi.object({
        email:Joi.string().email().required(),
        password:Joi.required(),
      });
    const { error } = loginValidator.validate(req.body);
    if (error) {
        return next(error);
    }
    return next();
}


export  {
    registerValidator,
    loginValidator
}