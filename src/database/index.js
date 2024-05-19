import mysql from "mysql";
import mongoose from "mongoose";

import { CONNECTION_Limit,HOST,USER,PASSWORD,DATABASE,MongoDB_URL } from "../config";

//database connection
// mongoose.connect(DB_URL,
//     {
//         useNewUrlParser:true, 
//         useUnifiedTopology:true
//     });
// const mongoDB = mongoose.connection;

const pool = mysql.createPool({
    connectionLimit: CONNECTION_Limit,
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  });
export default pool;