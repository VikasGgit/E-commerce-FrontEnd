import mongoose from "mongoose";

const AddressSchema=new mongoose.Schema({
    firstName:{
        required: true,
        type: String,
    },
    lastName:{
        required: true,
        type: String,
    },
    streetAddress:{
        required: true,
        type: String,
    },
    city:{
        required: true,
        type: String,
    },
    state:{
        required: true,
        type: String,
    },
    zipCode:{
        required: true,
        type: Number,
    },
    landmark: {
        type: String,
    },
    user:
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"users"
        },
    phoneNumber: {
        type: Number,
        required: true,
    },
    
});

const Address=mongoose.model("addresses", AddressSchema);
export default Address;