
import { razorpay } from "../config/razorPayClient.js";
import { findOrderById } from "./order.service.js";

const createPaymentLink = async (orderId)=>{
    try{
        const order = await  findOrderById(orderId);
        const paymentLinkRequest={
            amount: order.totalDiscountedPrice*100,
            currency:"INR",
            customer :{
                name: order.user.firstName + " " + order.user.lastName,
                contact: order.user.mobile,
                email: order.user.email,
            },
            notify: {
                email:true,
                sms:true,
            },
            reminder_enable:true,
            callback_url : `http://localhost:5173/payment/${orderId}`,
            callback_method : 'get'
        };

        const paymentLink= await razorpay.paymentLink.create(paymentLinkRequest);
        const paymentLinkId= paymentLink.id;
        const paymentLinkUrl= paymentLink.short_url;
        const resData={
            paymentLinkId,
            paymentLinkUrl
        }

        return resData;

    }
    catch(err){
        throw new Error(err.message);
    }
}

const updatePaymentInfo = async (reqData)=>{
    const paymentId= reqData.payment_id;
    const orderId= reqData.order_id;

    try{
        const order= await findOrderById(orderId);
        const payment= await razorpay.payments.fetch(paymentId);

        if(payment.status=="captured"){
            order.paymentDetails.paymentId=paymentId;
            order.paymentDetails.paymentStatus="COMPLETED";
            order.orderStatus="PLACED"
            
            await order.save();
            
        }

        const resData= {
            message: "Your order has been placed successfully", success:"true",
        }

        return resData;

    }catch(err){
        throw new Error(err.message);
    }

}

export {createPaymentLink, updatePaymentInfo}