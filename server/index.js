import  Express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const app = Express();
app.use(Express.json());

const PORT = process.env.PORT || 5000;
const product= model('product',userschemae);



app.post('/product', async (req, res) => {

const products = await product.find()


    res.json({
        success: true,
        data: products,
        message: `successfully fecth data. `,

    });
});



app.listen(PORT, () => {
    console.log(`server is runing ${PORT}`)
} )
