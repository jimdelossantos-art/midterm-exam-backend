const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    stock: Number
});


module.exports = mongoose.model('Product', productSchema);