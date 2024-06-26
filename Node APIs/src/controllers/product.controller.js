import { createProduct , deleteProduct, updateProduct, findProductById,
getAllProducts, createMultipleProducts} from "../services/product.service.js"

const createProducts = async(req, res)=>{
    try{    
      const  product= await createProduct(req.body)
        return res.status(200).send(product);
    }
    catch(e){
        res.status(500).send({message:e.message});
    }   
}

const deletedProducts = async(req, res)=>{
     try{
            const deletedProduct = await deleteProduct(req.params.id)
            return res.status(200).send({message:"Product deleted successfully"});
     }
     catch(e){
        res.status(500).send({message:e.message});
     }
}

const updateProducts = async(req, res)=>{
        try{
            const product= await updateProduct(req.params.id, req.body);
            return res.status(200).send(product);
        }
        catch(e){
            return res.status(500).send({message:e.message});
        }
}

const findProductsById = async(req, res)=>{
    try{
        const product = await findProductById(req.params.id);
        return res.status(200).send(product);
    }
    catch(e){
        return res.status(500).send({message:e.message});
    }
}

const getAllProduct = async(req, res)=>{
    try{
        const products = await getAllProducts(req.query);
        return res.status(200).send(products);
    }
    catch(e){
        return res.status(500).send({message:e.message});
    }
}
const createMultipleProduct=async(req, res)=>{
    try{
        await createMultipleProducts(req.body);
        return res.status(200).send({message: 'Multiple products created successfully'});
    }
    catch(e){
            return res.status(500).send({message:e.message});
    }
}

export {
    createMultipleProduct,
    deletedProducts,
    updateProducts,
    createProducts, 
    findProductsById,
    getAllProduct,
}