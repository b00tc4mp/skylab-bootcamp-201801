const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

const SubCategory = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Category = new Schema({
    name: {
        type: String,
        required: true
    },
    subcategories: [SubCategory]
})

const Product = new Schema({
    article: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    subcategory: {
        type: ObjectId,
        ref: 'SubCategory',
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: String,
    weight: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    partNumber: {
        type: String,
        required: true
    },
    ean: {
        type: Number,
        required: true
    },
    picture: String,
    pictureHigh: String,
    pictureLow: String,
    pictureThumb: String
})

module.exports = {
    Category: mongoose.model('Category', Category),
    SubCategory: mongoose.model('SubCategory', SubCategory),
    Product: mongoose.model('Product', Product)
}