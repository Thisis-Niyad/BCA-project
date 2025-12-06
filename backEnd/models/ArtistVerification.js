import mongoose from "mongoose";

const ArtistVerificationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNo: String,
    DOB: Date,
    gender: String,
    address: String,
    state: String,
    town: String,
    pin: String,
    artPortfolioLinks: [String],
    certificate: {
        filename: String,
        path: String,
    },
    workImages: [
        {
            filename: String,
            path: String,
        }
    ],

    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },

    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ArtistVerification", ArtistVerificationSchema);
