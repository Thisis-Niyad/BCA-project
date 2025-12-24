import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
    {
        artworkId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ArtistWork",
            required: true,
        },

        artistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        image: {
            type: String, // image path or URL
            required: true,
        },

        price: {
            type: Number, // price at the time of adding to cart
            required: true,
        },

        quantity: {
            type: Number,
            default: 1,
            min: 1,
        },
    },
    { _id: false }
);

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true, // one cart per user
        },

        items: [cartItemSchema],

        totalPrice: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: ["active", "checked_out"],
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Cart", cartSchema);
