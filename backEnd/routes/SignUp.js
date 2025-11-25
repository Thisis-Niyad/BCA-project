import express from "express"
import bcrypt from "bcrypt";
import actors from '../models/actors.js'

const router = express.Router();

router.post("/", async (req, res) => {
    const { Name, email, password } = req.body;
    const existingUser = await actors.findOne({ email });

    if (existingUser) {
        res.status(400).json({ msg: "already exists" });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new actors({
            name: Name,
            email: email,
            password: hashedPassword,
            role: "user"
        });

        const response = await newUser.save();
        res.status(201).json({ path: "/user/" + response.id });

    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
})

export default router