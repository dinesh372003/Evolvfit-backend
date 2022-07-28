const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    protien: {
        type: Number,
    },
    carbs: {
        type: Number,
    },
    fat: {
        type: Number,
    },
    acceptedUnits: {
        type: Array,
        default: [ "ml", "litre", "kg", "g", "item" ],
    },
    itemWeight: {
        type: Number,
    }    
}, {timestamps: true});

const FoodItem = mongoose.model("FoodItem", FoodItemSchema);

module.exports = FoodItem