import express from "express"
import dotenv from "dotenv"

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("working")
})

app.listen(PORT, () => {
    console.log(`server runnig at PORT:${PORT}`)
})