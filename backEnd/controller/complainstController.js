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

        const complaints = await complaint.find({}, {
            _id: 1,
            email: 1,
            name: 1,
            role: 1,
            dateOfComplaint: 1,
            title: 1,
            status: 1
        })
        // .sort({ status: status, createdAt: createdAt })
        // .skip(skip)
        // .limit(20);

        res.status(200).json(complaints);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}


export const complaintStatus = async (req, res) => {
    try {
        const actorId = req.params.id
        const complaints = await complaint.find({ actorId: actorId }, {
            _id: 1,
            dateOfComplaint: 1,
            title: 1,
            status: 1
        });
        res.status(200).json(complaints);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}

export const getComplaintDetails = async (req, res) => {
    try {
        const complaintDetails = await complaint.findById(req.params.complaintId);
        // if (!complaintDetails) {
        //     return res.status(404).json({ message: "Complaint not found" });
        // }
        res.status(200).json(complaintDetails);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }

}

export const postUpdateStatus = async (req, res) => {
    try {
        const response = await complaint.findByIdAndUpdate(req.params.complaintId, { status: req.body.status })
        res.status(200).json({ msg: "Status updated" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
}