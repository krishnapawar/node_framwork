import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'storage/'),
    filename:(req,file,cb)=>{
        const uniqueName =`${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
});

const upload = multer({
    storage,limits:{fileSize:1000000*5}
});

//controller
import { registerController, loginController, productController } from "../controllers";

//validators
import { loginValidator,registerValidator } from "../validators/authValidator";
import {storeValidator} from "../validators/productValidator";

//auth routes
router.post('/register',registerValidator,registerController.register);
router.post('/login',loginValidator,loginController.login);

//product routes
router.post('/product',upload.single('image'),storeValidator,productController.store);
router.put('/product/:id',storeValidator,productController.update);
router.delete('/product/:id',productController.destroy);
router.get('/product/:id',productController.showOne);
router.get('/product',productController.show);

export default router;