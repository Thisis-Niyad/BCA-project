import axios from "axios";
import { saveBase64Image } from "../utils/saveAiImage.js";

export const generateAIImage = async (prompt) => {
    const res = await axios.post(
        process.env.colobLink,
        { prompt }
    );

    const imageUrl = saveBase64Image(res.data.image);
    return imageUrl;
};
