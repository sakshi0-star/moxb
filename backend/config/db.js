import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sakshimishra21062002_db_user:yhV07BTpQdnBCjvP@cluster0.amiqssg.mongodb.net/")
        console.log("✅ MongoDB connected successfully")
    } catch (error) {
        console.log("❌ MongoDB connection error:", error.message)
        process.exit(1)
    }
}

export default connectDB