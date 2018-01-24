const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productlist", { useMongoClient : true });

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : String,
    price: Number,
    profile : String
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;