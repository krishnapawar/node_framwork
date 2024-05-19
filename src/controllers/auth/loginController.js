import { User } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import JwtService from "../../services/jwtService";
import bcrypt from "bcrypt";

const loginController = {
  async login(req, res, next) {
    try {
          const { email,password} = req.body;
          const user = await User.findOne({ email: email });
          if (!user) {
            return next(CustomErrorHandler.alreadyExist("Invalid Credentials"));
          }
          const match = await bcrypt.compare(password,user.password);
          if (!match) {
            return next(CustomErrorHandler.invailidCredential())
          }
          let access_token = JwtService.sign({_id:user._id,role:user.role});
          await User.findByIdAndUpdate({_id:user._id},{token:access_token});
          return res.status(200).json({
              message:"Successfully Logged In",
              access_token:access_token
          });
    } catch (error) {
        return next(error);
    }
  },
};
export default loginController;
