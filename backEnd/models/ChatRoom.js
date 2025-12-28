import mongoose from "mongoose";

const ChatRoomSchema = new mongoose.Schema(
    {
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "actors",
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
