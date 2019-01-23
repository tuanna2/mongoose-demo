const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_table', { useNewUrlParser: true });
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    age: String,
    email: String
});

const product = mongoose.model('product', ProductSchema);
// get all
module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        product.find({}, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        })
    })
}

// Store
module.exports.store = (object) => {
    return new Promise((resolve, reject) => {
        product.create(object, (err, result) => {
            if(err)reject(err);
            else resolve(result);
        })
    })
}
// detail
module.exports.detail = (id) => {
    return new Promise((resolve, reject) => {
        product.findById(id, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        })
    })
}
//update
module.exports.update = (id, object) => {
    return new Promise((resolve, reject) => {
        product.updateOne({_id:id}, object, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        })
    })
}
//delete
module.exports.delete = (id) => {
    return new Promise((resolve, reject) => {
        product.deleteOne({_id:id}, (err, result) => {
            if(err)reject(err)
            else resolve(result);
        })
    })
}

