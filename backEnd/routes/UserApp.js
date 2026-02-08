import express from "express"
import { getProfileDetails } from "../controller/common.js"
import { getActorsListForUser, getArtistProfile } from "../controller/manageAccount.js";
import { userHome } from "../controller/HomeController.js";
import { viewWork } from "../controller/ViewWork.js";

const router = express.Router();

router.get("/:id/home", userHome)
router.get("/:id/profile", getProfileDetails)
router.get("/:id/artwork/:artworkId", viewWork)
router.get("/:id/viewartist", getActorsListForUser)
router.get("/:id/viewartist/:artistId", getArtistProfile)

export default router