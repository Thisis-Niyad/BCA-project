import actors from '../models/actors.js'
import fs from 'fs'

export const sidebarDetails = async (req, res) => {
    try {
        let img = ""
        const actor = await actors.findById(req.params.id);
        if (actor.profileInfo.profilImg) {
            img = fs.readFileSync(`uploads/profile_images/${actor.profileInfo.profileImg}`, "base64")
        }
        res.status(200).json({ name: actor.name, Image: img, email: actor.email })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
}



export const getProfileDetails = async (req, res) => {
    try {
        let img = "";
        const actor = await actors.findById(req.params.id);
        if (actor.profileInfo.profilImg) {
            img = fs.readFileSync(`uploads/profile_images/${actor.profileInfo.profileImg}`, "base64")
        }
        res.status(200).json({
            Name: actor.name,
            email: actor.email,
            DOB: actor.profileInfo.dob || "",
            gender: actor.profileInfo.gender || "",
            phone: actor.profileInfo.phoneNo || "",
            state: actor.profileInfo.state || "",
            town: actor.profileInfo.town || "",
            pin: actor.profileInfo.pin || "",
            address: actor.profileInfo.address || "",
            ProfileImg: img || "",
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
}


export const updateProfile = async (req, res) => {
    try {
        const { Name, email, phone, DOB, address, gender, state, town, pin } = req.body;
        if (req.file) {
            const imagePath = req.file ? req.file.filename : "";
        }

        await actors.findByIdAndUpdate(req.params.id, {
            name: Name,
            email,
            profileInfo: {
                dob: DOB,
                gender,
                phoneNo: phone,
                state,
                town,
                pin,
                address,
                profileImg: imagePath || ""
            }
        });
        res.status(200).json({ msg: "Profile updated" });
    } catch (err) {
        console.log(err);

        res.status(500).json({ msg: "Server error" });
    }
}