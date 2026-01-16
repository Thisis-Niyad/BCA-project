import { ArtistWork } from '../models/ArtistWork.js'

export const getGallery = async (req, res) => {
    try {
        const Id = req.params.id;
        const response = await ArtistWork.find({ artistId: Id }, {
            _id: 1,
            title: 1,
            rate: 1,
            price: 1,
            imagePath: 1
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const viewWork = async (req, res) => {
    try {
        const artworkId = req.params.artworkId
        const response = await ArtistWork.findById(artworkId).select("")
        // incomplete
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
        log(err)
    }
}