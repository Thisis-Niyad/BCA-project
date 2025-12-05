import actors from '../models/actors.js'

export const getUserList = async (req, res) => {
    try {
        const users = await actors.find({ role: "user" }, {
            _id: 1,
            email: 1,
            name: 1,
            isBlocked: 1
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