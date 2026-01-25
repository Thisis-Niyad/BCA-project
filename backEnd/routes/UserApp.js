import express from "express"
import { getProfileDetails } from "../controller/common.js"
import { getActorsListForUser } from "../controller/manageAccount.js";
const router = express.Router();

router.get("/:id/profile", getProfileDetails)
router.get("/:id/viewartist", getActorsListForUser)


export default router