import mongoose from "mongoose";

const orderWorkSchema = new mongoose.Schema(
    {
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order",
            required: true,
            index: true,
        },

        artworkId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ArtistWork",
            required: true,
            index: true,
        },

        artistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true,
            index: true,
        },

        title: String,
        image: String,

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },

        workStatus: {
            type: String,
            enum: [
                "PENDING",
                "ACCEPTED",
                "IN_PROGRESS",
                "SUBMITTED",
                "APPROVED",
                "REJECTED"
            ],
            default: "PENDING",
        },

        artistPaymentStatus: {
            type: String,
            enum: ["UNPAID", "PAID"],
            default: "UNPAID",
        },
    },
    { timestamps: true }
);

export default mongoose.model("orderWork", orderWorkSchema);