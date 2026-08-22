import foodModel from '../models/foodModel.js'

const addFood = async(req , res) => {
    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        // Validate required fields
        const { name, price, description, category } = req.body;
        if (!name || !price || !category) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const food = new foodModel({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image: req.file.filename
        });

        await food.save();
        res.json({ success: true, message: "Food added successfully", data: food });
    } catch(error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error: " + error.message });
    }
}   

const listFood = async(req , res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch(error) {
        res.json({ success: false, message: "Error" });
    }
}

const removeFood = async(req , res) => {
    try {
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed" });
    } catch(error) {
        res.json({ success: false, message: "Error" });
    }
}

export default {addFood, listFood, removeFood};