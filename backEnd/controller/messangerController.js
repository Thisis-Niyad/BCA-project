import ChatRoom from "../models/ChatRoom.js";

export const getChatRoomId = async (req, res) => {
    const userId = req.params.id;
    const { artistId } = req.body;

    try {
        // 1️⃣ Check if conversation already exists
        let chatroomid = await ChatRoom.findOne({
            members: { $all: [userId, artistId] },
        });

        // 2️⃣ If not, create new conversation
        if (!chatroomid) {
            chatroomid = await ChatRoom.create({
                members: [userId, artistId],
            });
        }

        // 3️⃣ Send conversation back
        res.status(200).json(chatroomid);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}