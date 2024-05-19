import dotenv from "dotenv";

dotenv.config();
export const {
    APP_NAME,
    APP_URL,
    APP_ENV,
    APP_PORT,
    APP_DEBUG,

    JWT_SECRET,

    MongoDB_URL,
    
    CONNECTION_Limit=10,
    HOST="localhost",
    USER="root",
    PASSWORD="",
    DATABASE,
} = process.env;