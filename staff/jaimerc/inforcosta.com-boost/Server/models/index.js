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

const Order = new Schema({
    idUser: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            idProduct: {
                type: ObjectId,
                ref: 'Products',
                required: true
            },
            unit: {
                type: Number,
                required: true
            },
        }
    ],
    paymentMethod: {
        Method: String,
        status: Boolean
    },
    purchase: {
        status: String,
        deliveryDate: Date
    },
    date: Date,
})

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    telf: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nif: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orders: {
        type: ObjectId,
        ref: 'Orders',
        required: false
    },
})


module.exports = {
    Category: mongoose.model('Category', Category),
    SubCategory: mongoose.model('SubCategory', SubCategory),
    Product: mongoose.model('Product', Product),
    Order: mongoose.model('Order', Order),
    User: mongoose.model('User', User)
}