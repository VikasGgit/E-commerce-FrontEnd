import mongoose from "mongoose";
import validator  from "validator";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3, "must be greater than or equal to 3"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3, "must be greater than or equal to 3"]
    },
   password:{
    required:true,
    type:String,
   },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "please enter a valid email"]
    },
    role:{
        type:String,
        required:true,
        default:"CUSTOMER"
    },
    address:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"addresses"
        }
    ],
    payment_infor:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"payment_infor"
        }
    ],
    rating:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"reviews"
    }],
    createdAt:{
        type: Date,
        default: Date.now() 
    }

});

const User=mongoose.model("users", userSchema);
export default User;