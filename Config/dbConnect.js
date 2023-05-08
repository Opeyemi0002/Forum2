import mongoose from "mongoose";

export const dbConnect = async () => {
    try{
        await mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.mongodb_URL);
        console.log("you have been connected successfully");
    }catch(err) {
        console.log(err.message);
    }
}