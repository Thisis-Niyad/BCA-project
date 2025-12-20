import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
    {
        // who gave the rating
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",
            required: true,
        },

        // artist being rated
        artistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors", // your single actor model
            required: true,
        },

        // optional: specific work rating
        workId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ArtistWork",
            default: null, // null means artist-level rating
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },

        review: {
            type: String,
            trim: true,
            maxlength: 500,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * Prevent duplicate ratings:
 * - One user can rate an artist only once
 * - One user can rate a specific work only once
 */
ratingSchema.index(
    { user: 1, artist: 1, work: 1 },
    { unique: true }
);

export default mongoose.model("Rating", ratingSchema);
