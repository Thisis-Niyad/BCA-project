import express from "express"
import multer from "multer";
import ArtistVerification from "../models/ArtistVerification.js";
import actors from '../models/actors.js'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/registerationFiles");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

const router = express.Router();
const artistUpload = upload.fields([
    { name: "certificate", maxCount: 1 },
    { name: "workImages", maxCount: 10 },
]);

router.post("/", artistUpload, async (req, res) => {
    try {
        const { body, files } = req;

        const saved = await ArtistVerification.create({
            ...body,
            certificate: files.certificate
                ? {
                    filename: files.certificate[0].filename,
                    path: files.certificate[0].path,
                }
                : null,

            workImages: files.workImages?.map((img) => ({
                filename: img.filename,
                path: img.path,
            })),
        });
        const exists = await actors.findOne({ email: req.body.email });
        if (exists) {
            return res.status(201).json({
                msg: "Registration submitted! Admin will verify soon.",
                path: "/signin",
            });
        }
        return res.status(201).json({
            msg: "Your verification request is submitted.Please create an account to continue.",
            path: "/signup",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Something went wrong" });
    }
});


export default router