import express from "express";
import { PORT } from "./src/config";
import errorHandler from "./src/middlewires/errorHandler";
import cors from "cors";
const app = express();
import router from "./src/routes";
import path from "path";
import pool from "./src/database";
import { User } from "./src/models";

app.use(cors());

//database connection
// mongoose.connect(DB_URL,
//     {
//         useNewUrlParser:true, 
//         useUnifiedTopology:true
//     });
// const pool = mongoose.connection;

pool.on('error',console.error.bind(console,'connection error:'));
pool.once('open',()=>{
    console.log('DB connected.....');
});

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/api',router);
app.get('/',async(req,res)=>{
    try {
        let user = new User();
        let elements = {};


        elements.role_id=2;
        elements.user_type= "adminww";
        elements.permanent_id= "12345";
       let x ={
        elements:elements,
       }

        let data = await user.admin();
        user.updateOrCreate(x)
        return res.status(200).json({
            massage:"API is working fine!",
            data:data
        });
    } catch (error) {
        
    }
    
});

app.use(errorHandler);
app.listen(PORT || 3000,()=>console.log(`server runing http://127.0.0.1:${PORT}`));