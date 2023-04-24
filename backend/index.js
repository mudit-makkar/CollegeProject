const express=require('express');
const mongoose=require('mongoose');
const User=require('./models/User');
const fs=require("fs");
const cors=require("cors");
const loadDataToDatabase=require("./loadDataToDatabase");
const app=express();
const port=3001;


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/myDb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to database successfully");
  app.listen(port,()=>{
    console.log("App listening at port "+port);
    //loadDataToDatabase();
  })
});


app.get("/one",async(req,res)=>{
    try{
        let result=await User.find({"car":{"$in":["BMW","Mercedes"]}});
        let data=result.filter(function(record){
            let income=Number(record.income.slice(1));
            if(income<5){
                return record;
            }
        })
        res.status(200).json({"data":data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({"error":err});
    }   
})

app.get("/two",async(req,res)=>{
    try{
        let result=await User.find({"gender":"Male"});
        let data=result.map(function(record){
            let phone_price=Number(record.phone_price);
            if(phone_price>10000){
                return record;
            }
        })
        res.status(200).json({"data":data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({"error":err});
    }    
})
app.get("/three",async(req,res)=>{
    try{
        let result=await User.find({$and:[{"last_name":{$regex:"^M.*$"}}],$where:"this.quote.length>15"});
        let data=result.filter(function(record){
            let last_name=record.last_name.toLowerCase();
            let email=record.email.toLowerCase();
            if(email.includes(last_name)){
                return record;
            }
        })
        res.status(200).json({"data":data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({"error":err});
    }    
})
app.get("/four",async(req,res)=>{
    try{
        let data=await User.find({$and:[{"email":{$not:{$regex:"[0-9]+"}}},{"car":{$in:["BMW","Mercedes","Audi"]}}]});
        //console.log(data.length);
        res.status(200).json({"data":data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({"error":err});
    }    
})
// app.get("/five",async(req,res)=>{
//     try{
//         let users=await User.aggregate([
//             {
//                 $group:{
//                     _id:{city:"$city"},
//                     totalUsers: { $sum:550 }
//                 }
//             }
//         ]).sort("totalUsers").limit(10);

//         console.log(users);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({"error":err});
//     }    
// })
app.get("/five",async(req,res)=>{
    try{
        let users=await User.aggregate([
            {
                $group:{
                    _id:{city:"$city"},
                    totalUsers:  { $sum: 1 }
                }
            }
        ]).sort("totalUsers").limit(10);

        console.log(users);
    }
    catch(err){
        console.log(err);
        res.status(500).json({"error":err});
    }    
})
             