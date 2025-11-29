import complaint from "../models/Complaint.js";

export const newComplaint = async (req, res) => {
    try {
        const { Name, email, phone, title, complaintDetails, role } = req.body;
        const actorId = req.params.id

        const newComplaint = new complaint({
            name: Name,
            email,
            phoneNo: phone,
            title,
            complaintDetails,
            actorId,
            role,
        })
        const response = await newComplaint.save()
        res.status(201).json({ msg: 'complaint Raised' })
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const getComplaints = async (req, res) => {
    try {
        // const skip = parseInt(req.query.skip);
        // const status = parseInt(req.query.status);
        // const createdAt = parseInt(req.query.createdAt);

        const complaints = await complaint.find()
        // .sort({ status: status, createdAt: createdAt })
        // .skip(skip)
        // .limit(20);

        res.status(200).json({ complaints });
    } catch (err) {
        console.log(err);

        res.status(500).json({ msg: "Server error" });
    }
}