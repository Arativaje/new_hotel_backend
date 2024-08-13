const productModel = require('../model/product.model');

exports.getProduct = async(req,res)=>{
    let productList = await productModel.find({});
    res.send(productList);
}

exports.addProduct = async(req,res)=>{
    let product = await productModel.create(req.body);
    res.send(product);
}

exports.updateProduct = async(req,res)=>{
    let product = await productModel.findByIdAndUpdate(req.params.id,req.body);
    res.send(product);
}

exports.deleteProduct = async(req,res)=>{
    let product = await productModel.findByIdAndDelete(req.params.id);
    res.send(product);
}

exports.getProductById = async(req,res)=>{
    let product = await productModel.findById(req.params.id);
    res.send(product);
}