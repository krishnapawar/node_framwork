import { Product } from '../../models';
import CustomErrorHandler from '../../services/CustomErrorHandler';
const productController ={
    async store(req, res, next)
    {
        try {
            console.log(req.file.path.replace("\\","/"));
            const image = req.file.path.replace("\\","/");
            const {name,decription,price,category} =req.body;
            const product = await Product.create({name,decription,price,category,image});
            return res.status(200).json({
                status:"success",
                data:product
            });
        } catch (error) {
            return next(error);
        }
    },
    async show(req, res, next)
    {
        try {
            const product = await Product.find()
            .select('-updatedAt -__v');
            return res.status(200).json({
                status:"success",
                data:product
            });
        } catch (error) {
            return next(error);
        }
    },
    async showOne(req, res, next)
    {
        try {

            const product = await Product.findById({_id: req.params.id})
            .select('-updatedAt -__v');
            if (!product) {
                return next(CustomErrorHandler.notFound());
            }
            return res.status(200).json({
                status:"success",
                data:product
            });
        } catch (error) {
            return next(error);
        }
    },
    async update(req, res, next)
    {
        try {
            const {name,decription,price,category,image} =req.body;
            const product = await Product.findByIdAndUpdate({_id:req.params.id},
                {name,decription,price,category,
                    ...image!==undefined && image!==null && image});
            if (!product) {
                return next(CustomErrorHandler.notFound());
            }
            return res.status(200).json({
                status:"success",
                data:product
            });
        } catch (error) {
            return next(error);
        }
    },
    async destroy(req, res, next)
    {
        try {
            const product = await Product.findOneAndRemove({_id: req.params.id});
            if (!product) {
                return next(CustomErrorHandler.notFound());
            }
            return res.status(200).json({
                status:"success",
                data:product,
                message:"Product Delete Successfully!"
            });
        } catch (error) {
            return next(error);
        }
    }
}
export default productController;