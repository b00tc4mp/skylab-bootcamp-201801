const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Order = new Schema({
    idUser: String,
    products: [
        {
            idProduct: { type: Schema.ObjectId, ref: 'products' },
            unit: Number
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
    //totalPrice: Number
})

module.exports = mongoose.model('order', Order)