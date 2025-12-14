import express from "express"
import actors from '../models/actors.js'
import { upload } from "../middleWare/upload.js";
import { uploadWorkImg } from '../middleWare/uploadArtwork.js'
import { getProfileDetails, sidebarDetails, updateProfile } from "../controller/common.js";
import { complaintStatus, newComplaint } from "../controller/complainstController.js";
import { uploadArtwork } from "../controller/uploadArtWork.js";
const router = express.Router();

router.get("/:id", sidebarDetails)
router.get("/:id/profile", getProfileDetails)
router.post("/:id/profile", upload.single("ProfileImg"), updateProfile)
router.post("/:id/report/new", newComplaint)
router.get("/:id/reports", complaintStatus)
router.post("/:id/addpost", uploadWorkImg.single("workImage"), uploadArtwork)


export default router