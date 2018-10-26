const { Schema } = require('mongoose')

module.exports = new Schema({
    species: {
        type: String,
        enum: [ 'tomato', 'lettuce', 'corn', 'carrot', 'potato', 'artichoke', 'beetroot', 'flower', 'garlic', 'ginger', 'green_pepper', 'hot_pepper', 'leek', 'onion', 'radish', 'red_pepper', 'soybean', 'aubergine'],
        required: true
    },
    releaseDate: Date,
    shared: Boolean,
    m2: {
        type: Number,
        required: true
    }
})