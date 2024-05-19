import {JWT_SECRET} from '../config';
import jwt  from 'jsonwebtoken';
class JwtService{
    static sign(payload,expiry='60s',secret=JWT_SECRET){
        let token = jwt.sign(payload, secret, {
            expiresIn: expiry,
         });
         return token
    }
    
}

export default JwtService;