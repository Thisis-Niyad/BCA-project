import mongoose from "mongoose";

const blockSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
    data: {
        artistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true
        },
        imageHash: String,
        filename: String,
        path: String,
        uploadedAt: Date,
    },
    previousHash: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
    },
});

export default mongoose.model("ImageBlock", blockSchema);
