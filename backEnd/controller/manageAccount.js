import actors from '../models/actors.js'
import { ArtistWork } from '../models/ArtistWork.js'
import rating from '../models/rating.js';

export const getActorsList = async (req, res) => {
    try {
        const users = await actors.find({ role: req.query.actor }, {
            _id: 1,
            email: 1,
            name: 1,
            isBlocked: 1,
            profileInfo: {
                profileImg: 1
            }
        })
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const postToggleUserAccess = async (req, res) => {
    try {
        const updatedUser = await actors.findByIdAndUpdate(req.body.userId,
            [{ $set: { isBlocked: { $not: ["$isBlocked"] } } }], { new: true });


        res.status(200).json({ msg: "updated" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
}

export const getActorsListForUser = async (req, res) => {
    try {
        const users = await actors.find({ role: req.query.actor }, {
            _id: 1,
            name: 1,
            artistRating: 1,
            profileInfo: {
                profileImg: 1
            }
        })
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const getArtistProfile = async (req, res) => {
    try {
        const artistId = req.params.artistId
        const artist = await actors.findById(artistId, {
            _id: 1,
            name: 1,
            artistRating: 1,
            ratingCount: 1,
            email: 1,
            Bio: 1,
            profileInfo: {
                profileImg: 1,
                state: 1,
            }
        })
        const works = await ArtistWork.find({ artistId: artistId }, {
            _id: 1,
            title: 1,
            rate: 1,
            price: 1,
            imagePath: 1
        })
        res.status(200).json({ artist, works });

    } catch (err) {
        console.log(err);

        res.status(500).json({ msg: "Server error" });
    }
}