import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true,
            index: true,
        },

        orderNumber: {
            type: String,
            unique: true,
            index: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 0,
        },

        payment: {
            status: {
                type: String,
                enum: ["PENDING", "SUCCESS", "FAILED"],
                default: "PENDING",
            },
            method: String,
            paidAt: Date,
            referenceId: String,
        },

        orderStatus: {
            type: String,
            enum: ["CREATED", "CONFIRMED", "CANCELLED", "COMPLETED"],
            default: "CREATED",
        },

        deliveryStatus: {
            type: String,
            enum: ["PENDING", "IN_PROGRESS", "DELIVERED"],
            default: "PENDING",
        },

        items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "orderWork",
                required: true
            }
        ],

        notes: String,
        cancelledReason: String,

        // 👇 important for auto-cancel
        expiresAt: {
            type: Date,
            index: true
        }

    },
    { timestamps: true }
);

orderSchema.path("items").validate(function (value) {
    return value.length > 0;
}, "Order must have items");

export default mongoose.model("order", orderSchema);