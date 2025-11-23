import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import index from "./routes/index.js"
// import Admin from "./routes/Admin.js"
// import Artist from "./routes/Artist.js"
// import User from "./routes/User.js"
import Admins from "./models/admin.js"
import bcrypt from "bcrypt";
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

const fun = async (params) => {
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash("Tcaplexip@123", salt);
        // console.log(hashedPassword);

        const data = await Admins.findById('69230efc1988e11cf3b71236');
        const validPassword = await bcrypt.compare('Tcaplexip@123', data.password);
        console.log(validPassword);

    } catch (e) {
        console.log("error:", e);

    }

}
fun();
app.listen(PORT, () => {
    console.log(`server runnig at PORT:${PORT}`)
})