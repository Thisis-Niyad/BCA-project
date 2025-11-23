import mongoose from 'mongoose'

const AdminsSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export default mongoose.model("actors", AdminsSchema,);

// import { MongoClient } from 'mongoose'
// let dbConnection

// MediaSourceHandle.exports = {
//     connectTodb: (cb) => {
//         MongoClient.connect(process.env.DATABASE_URL)
//             .then((Admins) = {
//                 dbConnection=Admins.db()
//             return cb()
//             })
//             .catch(err => {
//                 console.log(err);
//                 return cb(err)
//             })
//     },
//     getDb: () => dbConnection
// }