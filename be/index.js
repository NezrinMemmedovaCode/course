import express from 'express'
import cors from "cors"
import mongoose from 'mongoose';


const app = express()
const port = 3000
app.use(express.json());
app.use(cors())

const productSchema = new mongoose.Schema({
  img:String,
    name: String,
    decs:String,
    price:Number
  });

  const productModel = mongoose.model('product', productSchema);
app.get('/product',async (req, res) => {
    const product=await productModel.find()

   
    res.send(product)
  })
  app.get('/product/:id',async (req, res) => {
    const {id}=req.params
    const product=await productModel.findById(id)

   
    res.send(product)
  })
  
  
  app.post('/product',async (req, res) => {
    const body=req.body
    const product=new productModel(body)
    await product.save()

    res.send(product)
  })
  
  app.put('/product/:id',async(req, res) => {
    const {id}=req.params
    const body=req.body
    const updateproduct=await productModel.findByIdAndUpdate(id,body)
    res.send(updateproduct)
  })
  
  app.delete('/product/:id',async (req, res) => {
    const {id}=req.params
    const deleteproduct=await productModel.findByIdAndDelete(id)
    res.send(deleteproduct)
  })
  mongoose.connect('mongodb+srv://nezrin:nezrin@nezrin.dtlskcs.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})