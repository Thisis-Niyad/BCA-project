import Cart from "../models/cart.js";
import { ArtistWork } from "../models/ArtistWork.js";
import mongoose from "mongoose";

export const addToCart = async (req, res) => {
    try {
        const userId = req.params.id; // from auth middleware
        const { artworkId, quantity = 1 } = req.body;

        // 1️⃣ Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(artworkId)) {
            return res.status(400).json({ message: "Invalid artworkId" });
        }

        // 2️⃣ Fetch artwork details
        const artwork = await ArtistWork.findById(artworkId);
        if (!artwork) {
            return res.status(404).json({ message: "Artwork not found" });
        }

        // 3️⃣ Find user's cart
        let cart = await Cart.findOne({ userId });

        // 4️⃣ Create cart if not exists
        if (!cart) {
            cart = new Cart({
                userId,
                items: [],
            });
        }

        // 5️⃣ Check if item already in cart
        const itemIndex = cart.items.findIndex(
            item => item.artworkId.toString() === artworkId
        );

        if (itemIndex > -1) {
            // Increase quantity
            cart.items[itemIndex].quantity += quantity;
        } else {
            // Add new item
            cart.items.push({
                artworkId: artwork._id,
                artistId: artwork.artistId,
                title: artwork.title,
                image: artwork.imagePath,
                price: artwork.price,
                quantity,
            });
        }

        // 6️⃣ Recalculate total price
        cart.totalPrice = cart.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        // 7️⃣ Save cart
        await cart.save();

        res.status(200).json({
            msg: "Item added to cart"
        });

    } catch (error) {
        console.error("Add to cart error:", error);
        res.status(500).json({ msg: "Server error, please try again" });
    }
};


export const getCart = async (req, res) => {
    try {
        const userId = req.params.id; // from auth middleware
        const cart = await Cart.findOne({ userId });

        res.status(200).json(cart)

    } catch (error) {
        console.error("Add to cart error:", error);
        res.status(500).json({ msg: "Server error" });
    }
}



export const deleteCartItem = async (req, res) => {
    try {
        const { id, artworkId } = req.params;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(artworkId)) {
            return res.status(400).json({ message: "Invalid artworkId" });
        }

        const cart = await Cart.findOneAndUpdate(
            { userId: id },
            {
                $pull: {
                    items: { artworkId: new mongoose.Types.ObjectId(artworkId) },
                },
            },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Recalculate total price
        cart.totalPrice = cart.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        await cart.save();

        res.status(200).json({
            msg: "Item removed from cart",
            cart,
        });
    } catch (error) {
        console.error("Delete cart item error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
