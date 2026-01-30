import mongoose from "mongoose";

const workorderSchema = new mongoose.Schema(
    {
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

        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "order",
            required: true,
            index: true,
        },

        // ✅ Work status for tracking progress
        workStatus: {
            type: String,
            enum: ["PENDING", "IN_PROGRESS", "SUBMITTED", "APPROVED", "REJECTED"],
            default: "PENDING",
        },

        // 💰 Artist payment tracking
        artistPaymentStatus: {
            type: String,
            enum: ["UNPAID", "PAID"],
            default: "UNPAID",
        },

        title: {
            type: String,
            required: true,
        },

        image: {
            type: String, // snapshot of artwork
            required: true,
        },

        price: {
            type: Number, // locked price at order creation
            required: true,
            min: 0,
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },

        // Optional notes or revisions
        notes: String,
        revisionsRequested: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true, // createdAt and updatedAt automatically
    }
);

// 🔥 Indexes for fast lookup
workorderSchema.index({ orderId: 1, artistId: 1 });
workorderSchema.index({ workStatus: 1 });
workorderSchema.index({ artistPaymentStatus: 1 });

export default mongoose.model("WorkOrder", workorderSchema);
