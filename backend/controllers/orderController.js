import orderModel from "../models/orderModel.js";
import User from "../models/userModel.js";

import stripe from "stripe";

const stripe  = new stripe(process.env.STRIPE_SECRET_KEY);



const placeOrder =async(req,res)=>{
    const{amount,address}=req.body;
    try{
        const order=await orderModel.create({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
        })
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export { placeOrder };