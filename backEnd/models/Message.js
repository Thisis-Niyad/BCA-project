import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        chatroomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ChatRoom",
            required: true,
        },

        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true,
        },

        messageType: {
            type: String,
            enum: ["text", "image"],
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "artist", "AI"],
            required: true,
        },
        text: {
            type: String,
        },

        image: {
            type: String,
        },

        seen: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
