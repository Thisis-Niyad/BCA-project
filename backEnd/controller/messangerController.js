import ChatRoom from "../models/ChatRoom.js";
import actors from '../models/actors.js'

export const getChatRoomId = async (req, res) => {
    const userId = req.params.id;
    const { artistId } = req.body;

    try {
        // 1️⃣ Check if conversation already exists
        let chatroomid = await ChatRoom.findOne({
            userId: userId,
            artistId: artistId
        });

        // 2️⃣ If not, create new conversation
        if (!chatroomid) {
            const [user, artist] = await Promise.all([
                actors.findById(userId).lean(),
                actors.findById(artistId).lean()
            ])

            chatroomid = await ChatRoom.create({
                artistId,
                userId,
                userName: user.name,
                artistName: artist.name,
                userProfile: user?.profileInfo?.profileImg || "",
                artistProfile: artist?.profileInfo?.profileImg || ""
            });
        }

        // 3️⃣ Send conversation back
        res.status(200).json(chatroomid);

    } catch (err) {
        console.log(err);

        res.status(500).json({ error: err.message });
    }

}

export const getChatList = async (req, res) => {
    try {
        const { id } = req.params;
        const role = req.query.role;
        const filter = role === "user"
            ? { userId: id }
            : { artistId: id };

        const selectFields = role === "user"
            ? "artistId artistName artistProfile lastMessage lastMessageAt"
            : "userId userName userProfile lastMessage lastMessageAt";

        const chats = await ChatRoom.find(filter)
            .select(selectFields)
            .sort({ lastMessageAt: -1 });

        res.json(chats);
    } catch (err) {
        res.status(500).json({ msg: "server error" });
    }
};

