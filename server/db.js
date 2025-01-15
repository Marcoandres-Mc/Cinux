import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const connectBd = async () => {

    const connectionString = process.env.MONGODB_URI;
    try {

        await mongoose.connect(connectionString, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000
        });
        console.log('>>> DB is connected');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}