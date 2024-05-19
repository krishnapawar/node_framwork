import dotenv from "dotenv";

dotenv.config();
export const {
    PORT,

    DEBUG,

    JWT_SECRET,

    MongoDB_URL,
    
    CONNECTION_Limit=10,
    HOST="localhost",
    USER="root",
    PASSWORD="",
    DATABASE,
} = process.env;