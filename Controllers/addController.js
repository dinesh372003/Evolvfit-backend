const FoodItem = require("../Schema/FoodItem");
const Meal = require("../Schema/Meal");

const addFoodItem = (req, res) => {
    console.log(req.body);
    const fooditem = new FoodItem(req.body);
    fooditem.save()
        .then((result) => {
            res.send("Saved");
            console.log("Food Item Saved");
        })
        .catch(err => {
            console.log(err)
            res.send(err);
        });
};

const addMeal = async (req, res) => {
    const details = req.body;
    const meal = new Meal();
    
    meal.name = details.name;
    meal.category = details.category;

    await FoodItems.find()
        .then(async(results) => {
        })
        .catch(err => {
            console.log(err);
            res.send(400)
            .json(err);
        })
    // await FoodItems.find()
    //     .then(async(result) => {
    //         await details.foodnames.map(async(foodname) => (
    //             if(result.name == foodname) {

    //             }
    //         ))
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.send(400)
    //         .json(err);
    //     });

    // await details.foodnames.map(async (foodname) => (
    //     await FoodItem.find()
    //         .then( async (results) => {
    //             await results.forEach((result) => {
    //                 if(result.name == foodname) {
    //                     meal.foodItems.push(result._id);
    //                     console.log(result._id);
    //                 }
    //             });

    //             meal.save()
    //             .then((result) => {
    //                 console.log("Meal Saved");
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //                 res.status(400)
    //                 .json(err)
    //             })
        
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(400)
    //             .send(err);
    //         })
    // ));
    res.status(200)
    .json("Meal Saved");

};

module.exports = {
    addFoodItem,
    addMeal,
}