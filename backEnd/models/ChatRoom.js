import mongoose from "mongoose";

const ChatRoomSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        ],
        lastMessage: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("ChatRoom", ChatRoomSchema);
