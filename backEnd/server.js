// ----------BISMILLAHI RAHMANI RAHEEM----------\\
import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import index from "./routes/index.js"
import Login from "./routes/Login.js"
import SignUp from "./routes/SignUp.js"
import Admin from './routes/Admin.js'
import Artist from './routes/Artist.js'
import User from './routes/User.js'
import UserApp from './routes/UserApp.js'
import ArtistRegisteration from './routes/ArtistRegisteration.js'
import Ratings from "./routes/Ratings.js"
import cors from 'cors'
import path from 'path'
import http from "http";
import { Server } from "socket.io";
import Message from "./models/Message.js"
import ChatRoom from './models/ChatRoom.js'
import { generateAIImage } from "./controller/AIController.js"

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

connectDB();

const app = express();
// socket start here
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        // origin: process.env.CLIENT_URL,
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("send_message", async (data) => {
        try {
            const message = await Message.create({
                chatroomId: data.room,
                senderId: data.senderId,
                role: data.role,
                messageType: data.msgType,
                text: data.text,
                image: data.image,
            });
            socket.to(data.room).emit("receive_message", data)
            let lastMsg = "";
            if (data.msgType === 'text') {
                lastMsg = data.text;
            } else {
                lastMsg = "Photo"
            }
            await ChatRoom.findByIdAndUpdate(data.room, { lastMessage: lastMsg, lastMessageAt: new Date(), })
        } catch (err) {
            console.error("Message save error:", err);
        }
    })

    socket.on("join_room", (data) => {
        socket.join(data);
    })

    socket.on("sendPromptToAI", async ({ userId, prompt }) => {
        try {
            const conversationId = userId;

            // 1️⃣ Save user message
            const userMsg = await Message.create({
                chatroomId: conversationId,
                senderId: conversationId,
                role: "user",
                messageType: "text",
                text: prompt,
            });
            io.to(conversationId).emit("receiveMessage", userMsg);

            // 2️⃣ Generate AI image
            const imagePath = await generateAIImage(prompt);

            // 3️⃣ Save AI message
            const aiMsg = await Message.create({
                chatroomId: conversationId,
                senderId: process.env.AI_Id,
                role: "AI",
                messageType: "image",
                image: imagePath,
            });

            // 4️⃣ Send AI image
            io.to(conversationId).emit("receiveMessage", aiMsg);
        } catch (error) {
            console.error("AI socket error:", error);
        }
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
})
// socket ended 
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static("uploads"))

app.use("/", index);
app.use("/signin", Login);
app.use("/signup", SignUp);
app.use("/admin", Admin);
app.use("/artist", Artist);
app.use("/user", UserApp);
app.use("/registeration", ArtistRegisteration)
app.use("/app", UserApp)
app.use("/rating", Ratings)

app.get('/download/uploads/:folder/:filename', (req, res) => {
    const { folder, filename } = req.params;
    const filePath = path.join('uploads', folder, filename);
    res.download(filePath);  // forces download
});


server.listen(PORT, () => {
    console.log(`server runnig at PORT:${PORT}`)
})