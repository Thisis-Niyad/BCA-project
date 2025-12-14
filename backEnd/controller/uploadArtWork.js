import crypto from "crypto";
import ImageBlock from "../models/Blockchain.js";
import { ArtistWork } from "../models/ArtistWork.js";
import { imageBlockchain } from "./Blockchain/functions.js";
import fs from "fs";

export const uploadArtwork = async (req, res) => {
    try {
        const { title, keywords, description, price } = req.body;
        const artistId = req.params.id;
        const imagePath = req.file.path;

        if (!req.file) {
            return res.status(400).json({ msg: "Image file is required" });
        }
        const imageBuffer = fs.readFileSync(req.file.path);

        // 1️⃣ Create hash from image content (BUFFER)
        const imageHash = crypto
            .createHash("sha256")
            .update(imageBuffer)
            .digest("hex");

        // 2️⃣ Check if image already exists in blockchain (duplicate)
        const existingImage = await ImageBlock.findOne({
            "data.imageHash": imageHash,
        });

        if (existingImage) {
            fs.unlinkSync(imagePath);
            return res.status(409).json({
                msg: "This artwork already exists (Duplicate detected)",
                blockIndex: existingImage.index,
            });
        }

        // 3️⃣ Prepare block data
        const blockData = {
            artistId,
            imageHash,
            filename: req.file.filename,
            path: imagePath,
            uploadedAt: new Date(),
        };

        // 4️⃣ Add block to blockchain (MongoDB)
        const newBlock = await imageBlockchain.addBlock(blockData);
        const newWork = new ArtistWork({
            title,
            description,
            keywords,
            price,
            artistId,
            imagePath,
            imageHash,
        })
        const response = await newWork.save();
        res.status(201).json({
            msg: "Artwork uploaded & secured on blockchain",
            block: newBlock,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Blockchain upload failed" });
    }
};
