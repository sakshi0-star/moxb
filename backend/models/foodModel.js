import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String
})
const foodModel = mongoose.models.food || mongoose.model("Food", foodSchema)
export default foodModel