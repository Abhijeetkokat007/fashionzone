import { Schema, model } from "mongoose";

const orderschema = new Schema ({
   user:{
    type: Schema.Types.ObjectId,
    ref: 'auth',
    required: true
   } ,
   product:{
    type: Schema.Types.ObjectId,
    ref: 'product',
    required: true
   },
   shipingaddress:{
   type:String,
    require:true
   },
   status:{
    type:String,
    default:"pending"
   },
   quentity:{
      type:Number,
    default: 1
   },
   deliverycharge:{
      type:Number,
       require:true
   },
})

const order = model("order", orderschema);
export default order