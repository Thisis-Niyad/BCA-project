import Rating from "../models/rating.js";
import actors from "../models/actors.js";
import { ArtistWork } from "../models/ArtistWork.js";

export const updateArtistRating = async (req, res) => {
    try {
        const userId = req.params.id;
        const artistId = req.params.artistId;
        const rating = req.body.rating;

        const newRating = new Rating({
            userId,
            artistId,
            rating
        });
        await newRating.save();
        await actors.updateOne(
            { _id: artistId },
            {
                $inc:
                {
                    artistRating: rating,
                    ratingCount: 1
                }
            }
        );
        res.status(201).json({ msg: "Rating has been updated" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "server error" });
    }
}

export const updateArtistWorkRating = async (req, res) => {
    try {
        const userId = req.params.id;
        const workId = req.params.workId;
        const rating = req.body.rating;
        const newRating = new Rating({
            userId,
            workId,
            rating
        });
        await newRating.save();
        await ArtistWork.updateOne(
            { _id: workId },
            {
                $inc:
                {
                    workRating: rating,
                    ratingCount: 1
                }
            }
        );
        res.status(201).json({ msg: "Rating has been updated" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: err });
    }
}

export const fetchArtistRating = async (req, res) => {
    try {
        const userId = req.params.id;
        const artistId = req.params.artistId;
        const artistRating = await Rating.findOne({
            userId,
            artistId,
        }, { rating: 1 })


        res.status(200).json(artistRating)
    } catch (err) {
        res.status(500).json({ msg: "server error" });
    }
}

export const fetchWorkRating = async (req, res) => {
    try {
        const userId = req.params.id;
        const workId = req.params.workId;
        const workRating = await Rating.find({
            userId,
            workId,
        }, { rating: 1 })
        res.status(200).json({ workRating })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "server error" });
    }
}