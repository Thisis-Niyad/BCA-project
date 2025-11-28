import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import index from "./routes/index.js"
import Login from "./routes/Login.js"
import SignUp from "./routes/SignUp.js"
import Admin from './routes/Admin.js'

import cors from 'cors'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static("uploads"))

app.use("/", index);
app.use("/signin", Login);
app.use("/signup", SignUp);
app.use("/admin", Admin);



app.listen(PORT, () => {
    console.log(`server runnig at PORT:${PORT}`)
})