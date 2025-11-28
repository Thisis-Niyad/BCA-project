import mongoose from 'mongoose'

const AdminsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    profileInfo: {
        phoneNo: {
            type: String,
            default: ""
        },
        address: {
            type: String,
            default: ""
        },
        gender: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: ""
        },
        town: {
            type: String,
            default: ""
        },
        pin: {
            type: Number,
            default: null
        },
        dob: {
            type: Date,
            default: null
        },
        profileImg: {
            type: String,
            default: ""
        }
    }

});

export default mongoose.model("actors", AdminsSchema,);
