import { createPaymentLink, updatePaymentInfo} from "../services/payment.service.js";

const createPaymentLin= async (req, res) => {
    try{
        const paymentLink = await createPaymentLink(req.params.id)
        return res.status(200).send(paymentLink);

    }
    catch(err){
        return res.status(500).send(err.message)
    }
};

const updatePaymentInf= async (req, res) => {
    try{
        await updatePaymentInfo(req.query)
        return res.status(200).send({message:"Payment info updated",success:true})
    }
    catch(err){
        return res.status(500).send(err.message)
    }
};

export{
    createPaymentLin, updatePaymentInf
}