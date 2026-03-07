import express from "express"
import actors from '../models/actors.js'
import bcrypt from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const actor = await actors.findOne({ email });

        if (!actor) {
            return res.status(404).json({ msg: "User not found" });
        }
        if (actor.isBlocked) {
            return res.status(403).json({ msg: "Your account is blocked by admin" });
        }
        const validPassword = await bcrypt.compare(password, actor.password);
        if (!validPassword) {
            return res.status(401).json({ msg: "Password incorrect" });
        }
        const path = "/" + actor.role + "/" + actor._id;
        const token = jwt.sign({ id: actor._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return res.status(200).json({ path, token });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });

    }

})

export default router