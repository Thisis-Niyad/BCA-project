import fs from "fs";
import path from "path";

export const saveBase64Image = (base64Data) => {
    const buffer = Buffer.from(base64Data, "base64");
    const fileName = `${Date.now()}.png`;

    const uploadPath = path.join("uploads/images/", fileName);

    fs.writeFileSync(uploadPath, buffer);

    return `uploads/images/${fileName}`;
};
