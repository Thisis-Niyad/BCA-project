import mongoose from "mongoose";

const ChatRoomSchema = new mongoose.Schema(
    {
        artistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true,
        },
        artistName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true,
        },
        userProfile: {
            type: String,
            default: ""
        },
        artistProfile: {
            type: String,
            default: ""
        },
        lastMessage: {
            type: String,
        },
        lastMessageAt: {
            type: Date,
        }
    },
    { timestamps: true }
);

export default mongoose.model("ChatRoom", ChatRoomSchema);
