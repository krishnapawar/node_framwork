import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/jwtService";
import bcrypt from 'bcrypt';
import { User } from "../../models";

const registerController ={
    async register(req,res,next){
        try {

            const {name,email , password} = req.body;
            const exist = await User.exists({email:email});
            if (exist) {
                return next(CustomErrorHandler.alreadyExist('This email already exist'));
            }

            const hashPassword = await bcrypt.hash(password,10);

            const user =new User({
                name,email,password:hashPassword
            })
       
            const result = await user.save();
           
            let access_token = JwtService.sign({_id:result._id,role:result.role});
            return res.status(200).json({
                message:"register successfully",
                access_token:access_token
            });
        } catch (error) {
           return next(error); 
        }
    }
}
export default registerController;