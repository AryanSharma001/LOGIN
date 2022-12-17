  const express = require("express");
  const app = express();
  const mongoose = require("mongoose"); 
  const cors = require('cors')
  const bodyParser = require('body-parser')
  app.use(express.json());

  const mongoUrl = "mongodb+srv://AryanSharma001:qwertyuiop2237@cluster0.sa98dvp.mongodb.net/test?retryWrites=true&w=majority"

  mongoose.connect(mongoUrl,{
    useNewUrlParser:true
  }).then(()=>{console.log("Connected to database");})
  .catch(e=>console.log(e));

  /*
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
*/
app.use(cors())
app.use(bodyParser.json())


const User = require("./userDetails");
const { response } = require("express");

app.post("/register",async(req,res)=>{

    const {name,email,mobileNo,password }=req.body;
    try{
        await User.create({
            uname:name,
            email,
            phoneNo:mobileNo,
            password
        });
        res.send({status:"OK"})
    }
    catch(error){
        res.send({status:"Error"});

    }
} );

app.post("/login",async(req,response)=>{
  console.log(req.body);
  const {email,password }=req.body;
  try{
    User.find({email}).then(res=>{
      console.log(res)
      if(res.length>=1){
      if(res[0].password===password){
      response.send({status:"ok"})
      }
      else throw "error"
      }
      else throw "error"
      }).catch(err=>console.log(err))
    /*
      const found = await User.find({
         
          email,
          
      });
      if(found.length===1 ){
        if(password===found[0].password)
        res.send({status:"OK"})
        else{
          throw "error"
        }
      }
      else{
        throw "error"
      }
      */
  }
  catch(error){
      response.send({status:"Error"});

  }
} );

app.listen(5000,()=>{
  console.log("server started");
});
