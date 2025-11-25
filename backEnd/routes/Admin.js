import express from "express"
import actors from '../models/actors.js'
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const admin = await actors.findById(req.params.id);
        res.status(200).json({ name: admin.name, Image: admin.profileInfo.profileImg })
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
})

router.get("/:id/profile", async (req, res) => {
    try {
        const admin = await actors.findById(req.params.id);

        res.status(200).json({
            Name: admin.name,
            email: admin.email,
            DOB: admin.profileInfo.dob || "",
            Gender: admin.profileInfo.gender || "",
            phone: admin.profileInfo.phoneNo || "",
            state: admin.profileInfo.state || "",
            town: admin.profileInfo.town || "",
            pin: admin.profileInfo.pin || "",
            address: admin.profileInfo.address || "",
            ProfileImg: admin.profileInfo.profileImg || "",
        })
    } catch (err) {
        console.log(err);

        res.status(500).json({ msg: "Server error" });
    }
})

export default router