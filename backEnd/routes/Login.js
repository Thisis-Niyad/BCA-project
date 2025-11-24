import express from "express"
import actors from '../models/actors.js'
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const actor = await actors.findOne({ email });

        if (!actor) {
            return res.status(404).json({ msg: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, actor.password);
        if (!validPassword) {
            return res.status(401).json({ msg: "Password incorrect" });
        }
        const path = "/" + actor.role + "/" + actor._id;

        return res.status(200).json({ path });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });

    }

})

export default router