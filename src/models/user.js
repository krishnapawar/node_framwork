// It is example code write your own like this
//refer this link https://www.npmjs.com/package/@krishnapawar/kp-mysql-models 
// learn for more about kp-mysql-models package
import pool from "../database";
import { BaseModels} from "@krishnapawar/kp-mysql-models";

class User extends BaseModels{
    constructor(){
        super(pool);
        
        // this._hidden=[
        //     "password","remember_token",
        //     "otp_mobile","mobile",
        //     "alternate_mobile","otp_email",
        //     "auth_token","device_token",
        //     "added_by","device_type"
        // ];

        // this._show=["id","role_id","user_type","email","first_name","last_name"];
    }

    async getAdmins(){
        return await this.dbQuery('select * from users where role_id = 1');
    }
    async admin(){
        return await this.first({
            where:{
                id:1,
                role_id:1
            }
        });
    }
}

export default User;