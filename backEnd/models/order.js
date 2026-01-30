import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
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

        title: String, // snapshot
        image: String, // snapshot

        price: {
            type: Number, // locked price at purchase time
            required: true,
            min: 0,
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },

        // 🔥 Artist work tracking
        workStatus: {
            type: String,
            enum: ["PENDING", "IN_PROGRESS", "SUBMITTED", "APPROVED"],
            default: "PENDING",
        },

        // 💰 Artist settlement
        artistPaymentStatus: {
            type: String,
            enum: ["UNPAID", "PAID"],
            default: "UNPAID",
        },
    },
    { _id: false }
);


const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
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
            method: {
                type: String, // COD / WALLET / MANUAL
            },
            paidAt: Date,
            referenceId: String, // txn id / manual receipt
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

        items: {
            type: [ItemSchema],
            validate: [v => v.length > 0, "Order must have items"],
        },

        // 🧾 Audit fields
        notes: String,
        cancelledReason: String,

        createdAt: {
            type: Date,
            default: Date.now,
        },

        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);
