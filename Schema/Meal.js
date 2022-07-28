const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    foodItems: {
        type: Array,
    }
}, {timestamps: true});

const Meal = mongoose.model("Meal", MealSchema);

module.exports = Meal;