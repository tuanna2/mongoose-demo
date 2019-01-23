const Product = require('../models/product.model');


// get all
exports.get = async (req, res) => {
    try{
        let result = await Product.getAll();
        res.json(result);
    }catch(e) {
        console.log(e);
    }  
    // res.send("hello");
};

// store
exports.store = async (req, res) => {
    try{
        console.log("req.body:",req.body);
        //let object = {name: "tuan", age: "23", email : "tuan@gmail.com"};
        let result = await Product.store(req.body);
        res.json(result);
    } catch(e) {
        console.log(e);
    }
};

//detail
exports.detail = async (req, res) => {
    try{
        let result = await Product.detail(req.params.productId);
        res.json(result);
    } catch(e) {
        console.log(e);
    }
};
//update
exports.update = async (req, res) => {
    try{
        let result = await Product.update(req.params.productId, req.body);
        res.json(result);
    } catch(e) {
        console.log(e);
    }
};
//delete
exports.delete = async (req, res) => {
    try{
        let result = Product.delete(req.params.productId);
        res.json(result);
    } catch (e) {
        console.log(e);
    }
};


