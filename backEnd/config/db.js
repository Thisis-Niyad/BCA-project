import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to mongoose");
    } catch (error) {
        console.log("error to connectin to db:", error);
        process.exit(1);

    }
}