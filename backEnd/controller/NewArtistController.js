import ArtistVerification from '../models/ArtistVerification.js'
import actors from '../models/actors.js';

export const getAllNewArtist = async (req, res) => {
    try {
        const AllNewArtists = await ArtistVerification.find({}, {
            _id: 1,
            email: 1,
            name: 1,
            status: 1
        })
        res.status(200).json(AllNewArtists);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const getViewArtist = async (req, res) => {
    try {
        const artist = await ArtistVerification.findById(req.params.newartistId)
        res.status(200).json(artist);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const putRejectApplication = async (req, res) => {
    try {
        await ArtistVerification.findByIdAndUpdate(req.params.newartistId, {
            status: "Rejected"
        });

        res.status(200).json({ msg: "Artist rejected" });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}
// router.put("/approve/:id", );
export const putApproveApplication = async (req, res) => {
    try {
        const application = await ArtistVerification.findByIdAndUpdate(req.params.newartistId, {
            status: "Approved"
        });

        if (!application) {
            return res.status(404).json({ msg: "Application not found" });
        }

        const updatedActor = await actors.findOneAndUpdate(
            { email: application.email },
            {
                $set: {
                    role: "artist",
                    profileInfo: {
                        phoneNo: application.phoneNo,
                        address: application.address,
                        gender: application.gender,
                        state: application.state,
                        town: application.town,
                        pin: application.pin,
                        dob: application.DOB,
                    }
                },
            },
            { new: true } // return updated Actor
        );

        if (!updatedActor) {
            return res.status(404).json({ msg: "Actor not found" });
        }

        res.status(200).json({ msg: "Artist approved" });
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

