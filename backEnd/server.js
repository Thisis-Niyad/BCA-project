import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import index from "./routes/index.js"
import Login from "./routes/Login.js"
import SignUp from "./routes/SignUp.js"
// import Artist from "./routes/Artist.js"
// import User from "./routes/User.js"
import bcrypt from "bcrypt";
import cors from 'cors'
import Admins from "./models/actors.js"

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", index);
app.use("/signin", Login);
app.use("/signup", SignUp);
// app.use("/",index);

const fun = async (params) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("Tcaplexip@123", salt);
        console.log(hashedPassword);


    } catch (e) {
        console.log("error:", e);
    }
}

app.listen(PORT, () => {
    console.log(`server runnig at PORT:${PORT}`)
})