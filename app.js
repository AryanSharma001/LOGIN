  const express = require("express");
  const app = express();
  const mongoose = require("mongoose"); 
  app.use(express.json());

  const mongoUrl = "mongodb+srv://AryanSharma001:qwertyuiop2237@cluster0.sa98dvp.mongodb.net/?retryWrites=true&w=majority"

  mongoose.connect(mongoUrl,{
    useNewUrlParser:true
  }).then(()=>{console.log("Connected to database");})
  .catch(e=>console.log(e));

  





  app.listen(5000,()=>{
    console.log("server started");
  });

  app.post("/post",async(req,res)=>{
    console.log(req.body);
    
    const{data}=req.body;
    try{
        if(data=="aryan"){
            res.send({status:"ok"});
        }
        else{
            res.send({status:"User not found!"});
        }
    }
    catch(error){
        res.send({status:"something went wrong"});
    }
    
    
  });


require("./userDetails");

const User=mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const {name,email,mobileNo }=req.body;
    try{
        await User.create({
            uname:name,
            email,
            phoneNo:mobileNo,
        });
        res.send({status:"OK"})
    }
    catch(error){
        res.send({status:"Error"});

    }
} );