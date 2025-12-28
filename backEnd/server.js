import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import index from "./routes/index.js"
import Login from "./routes/Login.js"
import SignUp from "./routes/SignUp.js"
import Admin from './routes/Admin.js'
import Artist from './routes/Artist.js'
import User from './routes/User.js'
import ArtistRegisteration from './routes/ArtistRegisteration.js'
import Ratings from "./routes/Ratings.js"
import cors from 'cors'
import path from 'path'
// 
import http from "http";
import { Server } from "socket.io";
// 
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

connectDB();

const app = express();
// 
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
    },
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
})
// 
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
app.use("/user", User);
app.use("/registeration", ArtistRegisteration)
app.use("/rating", Ratings)

app.get('/download/uploads/:folder/:filename', (req, res) => {
    const { folder, filename } = req.params;
    const filePath = path.join('uploads', folder, filename);
    res.download(filePath);  // forces download
});


app.listen(PORT, () => {
    console.log(`server runnig at PORT:${PORT}`)
})