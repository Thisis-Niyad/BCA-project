import actors from '../models/actors.js'
import complaint from '../models/Complaint.js'

export const getAdminHomeDetails = async (req, res) => {
    try {
        let sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const noofUser = await actors.countDocuments({ role: "user" })
        const noofArtist = await actors.countDocuments({ role: "artist" })
        const noofComplaints = await complaint.countDocuments()
        const noofComplaintsByMonth = await complaint.aggregate([
            {
                $match: {
                    dateOfComplaint: { $gte: sixMonthsAgo }
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$dateOfComplaint" },
                        month: { $month: "$dateOfComplaint" }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1
                }
            }
        ])
        const topTenArtist = await actors.find({ role: "artist" }, { name: 1, artistRating: 1 }).sort({ artistRating: -1 }).limit(10)
        const formattedNComplaints =
            [{
                id: "complaints",
                data: noofComplaintsByMonth.map(item => ({
                    x: monthNames[item._id.month - 1],
                    y: item.count
                }))
            }]
        res.status(200).json({ noofComplaints, noofUser, noofArtist, formattedNComplaints, topTenArtist })


    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
}