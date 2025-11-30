import express from "express"
import actors from '../models/actors.js'
import { upload } from "../middleWare/upload.js";
import { getProfileDetails, sidebarDetails, updateProfile } from "../controller/common.js";
import { getComplaintDetails, getComplaints } from "../controller/complainstController.js";
const router = express.Router();

router.get("/:id", sidebarDetails)
router.get("/:id/profile", getProfileDetails)
router.post("/:id/profile", upload.single("ProfileImg"), updateProfile)
router.get("/:id/complaints", getComplaints)
router.get("/:id/complaints/:complaintId", getComplaintDetails)
export default router