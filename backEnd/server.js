import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import index from "./routes/index.js"
// import Admin from "./routes/Admin.js"
// import Artist from "./routes/Artist.js"
// import User from "./routes/User.js"

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/", index);
// app.use("/",index);
// app.use("/",index);
// app.use("/",index);

app.listen(PORT, () => {
    console.log(`server runnig at PORT:${PORT}`)
})