import  Express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import User from "./models/User.js";

const app = Express();
app.use(Express.json());

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    if(connection){
        console.log(`mongoDB connected`)
    }
};

// signup
app.post("/signup", async (req, res) =>{
    const {name, email, mobile, address, password} = req.body;
    const newUser = new User({
        name,
        email,
        mobile,
        address,
        password
    });

   try{
    const saveuser = await newUser.save();
    res.json({
        success:true,
        data: saveuser,
        message: "user created successfully."

    })
   }catch(e){
    res.json({
        success:false,
        message:e.message
    })
   }
}
)

// post login

app.post("/login", async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
      return  res.json({
            success:false,
            message: "invalid email and password"   
        })
    }

    const user = await User.findOne({
        email:email,
        password:password
    })
    if(user){
        res.json({
            success:true,
            data:user,
            message: "login succesfull"
        })
    }
    else{
        res.json({
            success:false,
          
            message: "invalid data"
        })
    }
})

app.listen(PORT, () => {
    console.log(`server is runing ${PORT}`)
    connectDB();
} )
