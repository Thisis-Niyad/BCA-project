import mongoose from "mongoose";

const artistWorkSchema = new mongoose.Schema(
    {
        artistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "actors",           // your existing artist/user model
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        imagePath: String,
        blockchainHash: String,   // 🔗 link to blockchain
        imageHash: String,        // for fast verification
        createdAt: { type: Date, default: Date.now },
        workRating: {
            type: Number, default: 0
        },
        ratingCount: {
            type: Number, default: 0
        },
        price: {
            type: Number,
            default: 0,
        },

        // ⭐ BEST PART: SEARCHABLE TAGS / KEYWORDS
        keywords: [
            {
                type: String,
                trim: true,
                lowercase: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const ArtistWork = mongoose.model("ArtistWork", artistWorkSchema);
