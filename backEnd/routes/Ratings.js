import express from "express"
import { fetchArtistRating, updateArtistRating } from "../controller/RatingController.js";

const router = express.Router();

router.put("/:id/artistrating/:artistId", updateArtistRating)
router.get("/:id/artistrating/:artistId", fetchArtistRating)

export default router