import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sakshimishra21062002_db_user:EMfJSailRud8BPpC@cluster0.wtryfy6.mongodb.net/");

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Connection error: ${error.message}`);
  }
};

export default connectDB;