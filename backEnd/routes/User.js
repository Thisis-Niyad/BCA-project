import express from "express"
import actors from '../models/actors.js'
import { upload } from "../middleWare/upload.js";
import { getProfileDetails, sidebarDetails, updateProfile } from "../controller/common.js";
const router = express.Router();

router.get("/:id", sidebarDetails)
router.get("/:id/profile", getProfileDetails)
router.post("/:id/profile", updateProfile)

export default router