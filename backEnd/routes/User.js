import express from "express"
import actors from '../models/actors.js'
import { upload } from "../middleWare/upload.js";
import { getProfileDetails, sidebarDetails, updateProfile } from "../controller/common.js";
import { complaintStatus, newComplaint } from "../controller/complainstController.js";
const router = express.Router();

router.get("/:id", sidebarDetails)
router.get("/:id/profile", getProfileDetails)
router.post("/:id/profile", updateProfile)
router.post("/:id/report/new", newComplaint)
router.get("/:id/reports", complaintStatus)

export default router