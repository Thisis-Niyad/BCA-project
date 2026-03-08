import mongoose from "mongoose";
import order from "../models/Order.js";
import orderWork from "../models/orderWork.js";
import { ArtistWork } from "../models/ArtistWork.js";

export const checkout = async (req, res) => {
    try {
        const { cart } = req.body;

        if (!cart || !cart.items || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const workIds = [];

        // Create orderWork for each cart item
        for (const item of cart.items) {
            const artwork = await ArtistWork.findById(item.artworkId);

            if (!artwork) {
                return res.status(404).json({ message: "Artwork not found" });
            }

            const work = new orderWork({
                artworkId: artwork._id,
                artistId: artwork.artistId,
                title: artwork.title,
                image: artwork.image,
                price: artwork.price,
                quantity: item.quantity || 1
            });

            await work.save();

            workIds.push(work._id);
        }

        // Create Order AFTER works exist
        const Order = new order({
            userId: cart.userId,
            orderNumber: "ORD-" + Date.now(),
            amount: cart.totalPrice,
            items: workIds,
            expiresAt: new Date(Date.now() + 15 * 60 * 1000)
        });

        await Order.save();

        // update orderId inside orderWork
        await orderWork.updateMany(
            { _id: { $in: workIds } },
            { $set: { orderId: Order._id } }
        );

        res.status(201).json({
            message: "Order created successfully",
            id: Order._id
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Checkout failed" });
    }

};

export const getAmount = async (req, res) => {
    try {
        const { orderId } = req.params;
        const Order = await order.findById(orderId);
        res.status(200).json(Order.amount)
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
}

export const postPayment = async (req, res) => {
    try {
        const { orderId } = req.params;
        const Order = await order.findByIdAndUpdate(orderId, { $set: { "payment.status": "SUCCESS" } })
        res.status(201).json({ msg: " payment Success full" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
}

export const getUserOrders = async (req, res) => {
    try {
        const Orders = await order.find({
            userId: req.params.id
        })

        res.status(200).json(Orders);
    } catch (err) {
        res.status(500).json(err);
    }
};