import { updateCartItem , removeCartItem} from "../services/cartItem.service"

const updateCartItems=async(req, res)=>{
    const user= req.user;
    try{
            const updateCart = await updateCartItem(user._id, req.params.id, req.body)
            return res.status(200).send(updateCart)
    }
    catch(err){
        return res.status(500).send({error: err.message});
    }
}

const removeCartItems = async (req, res) => {
    let user = req.user;
    try{
        await removeCartItem(user._id, req.params.id)
        return res.status(200).send({message: "item removed successfully"});
    }
    catch(err){
        return res.status(500).send({error: err.message});
    }

}

export {
    removeCartItems,
    updateCartItems,
}