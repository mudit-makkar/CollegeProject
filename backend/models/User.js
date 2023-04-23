const mongoose=require("mongoose");
const {Schema,model}=mongoose;
const userSchema=new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: String
})
const User=model('User',userSchema);
module.exports=User;