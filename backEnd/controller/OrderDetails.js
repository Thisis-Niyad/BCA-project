import mongoose from "mongoose";
import Order from "../models/Order.js";
import orderWork from "../models/orderWork.js";
// import ArtistWork from "../models/ArtistWork.js";

export const checkout = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { id: userId } = req.params;
        const { cart } = req.body;

        if (!cart || cart.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        let totalAmount = 0;
        const orderItems = [];

        for (const item of cart) {
            const artwork = await ArtistWork.findById(item.artworkId).session(session);

            if (!artwork) {
                throw new Error("Artwork not found");
            }

            const itemTotal = artwork.price * item.quantity;
            totalAmount += itemTotal;

            orderItems.push({
                artworkId: artwork._id,
                artistId: artwork.artistId,
                title: artwork.title,
                image: artwork.image,
                price: artwork.price,
                quantity: item.quantity
            });
        }

        // 🔥 Set expiry time (15 minutes)
        const expiryTime = new Date(Date.now() + 15 * 60 * 1000);

        // 🔥 Create Order
        const newOrder = await Order.create(
            [{
                userId,
                amount: totalAmount,
                orderNumber: "ORD" + Date.now(),
                expiresAt: expiryTime
            }],
            { session }
        );

        const createdOrder = newOrder[0];

        // 🔥 Create orderWork entries
        const orderWorkDocs = orderItems.map(item => ({
            ...item,
            orderId: createdOrder._id
        }));

        await orderWork.insertMany(orderWorkDocs, { session });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            message: "Order created successfully",
            orderId: createdOrder._id,
            orderNumber: createdOrder.orderNumber,
            totalAmount,
            expiresAt: expiryTime
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        console.error(error);
        res.status(500).json({ message: "Checkout failed" });
    }
};