import mongoose from 'mongoose'

const ComplaintSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    actorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "actors",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    dateOfComplaint: {
        type: Date,
        default: Date.now
    },
    complaintDetails: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "artist"]
    },
    status: {
        type: String,
        enum: ["pending", "In progress", "Resoleved", "Rejected"],
        default: "pending"
    }
});

export default mongoose.model("complaint", ComplaintSchema,);
