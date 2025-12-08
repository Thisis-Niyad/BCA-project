import express from "express"
import actors from '../models/actors.js'
import { upload } from "../middleWare/upload.js";
import { getProfileDetails, sidebarDetails, updateProfile } from "../controller/common.js";
import {
    getComplaintDetails,
    getComplaints,
    postUpdateStatus
} from "../controller/complainstController.js";
import { getActorsList, postToggleUserAccess } from "../controller/manageAccount.js";
import { getAllNewArtist, getViewArtist, putApproveApplication, putRejectApplication } from "../controller/NewArtistController.js";

const router = express.Router();

router.get("/:id", sidebarDetails)
router.get("/:id/profile", getProfileDetails)
router.post("/:id/profile", upload.single("ProfileImg"), updateProfile)
router.get("/:id/complaints", getComplaints)
router.get("/:id/complaints/:complaintId", getComplaintDetails)
router.post("/:id/complaints/:complaintId", postUpdateStatus)
router.get("/:id/viewactors", getActorsList)
router.post("/:id/toggleuseraccess", postToggleUserAccess)
router.get("/:id/newartist", getAllNewArtist)
router.get("/:id/newartist/:newartistId", getViewArtist)
router.put("/:id/approve/:newartistId", putApproveApplication)
router.put("/:id/reject/:newartistId", putRejectApplication)


export default router