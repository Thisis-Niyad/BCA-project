import express from "express"
import actors from '../models/actors.js'
import { upload } from "../middleWare/upload.js";
import { getProfileDetails, sidebarDetails, updateProfile } from "../controller/common.js";
import { complaintStatus, getComplaintDetails, newComplaint } from "../controller/complainstController.js";
import { getActorsListForUser, getArtistProfile } from "../controller/manageAccount.js";
import { getChatList, getChatRoomId, getMessages, sendImage } from '../controller/messangerController.js'
import { uploadchatImg } from "../middleWare/uploadChatImages.js";
import { userHome } from "../controller/HomeController.js";
import { viewWork } from "../controller/ViewWork.js";
import { addToCart, deleteCartItem, getCart, updateCartItem } from "../controller/CartController.js";

const router = express.Router();

router.get("/:id", sidebarDetails)
router.get("/:id/home", userHome)
router.get("/:id/profile", getProfileDetails)
router.post("/:id/profile", upload.single("ProfileImg"), updateProfile)
router.post("/:id/report/new", newComplaint)
router.get("/:id/reports", complaintStatus)
router.get("/:id/report/:complaintId", getComplaintDetails)
router.get("/:id/viewartist", getActorsListForUser)
router.get("/:id/viewartist/:artistId", getArtistProfile)
router.post("/:id/getchatroomid", getChatRoomId)
router.get("/:id/chats", getChatList)
router.get("/:id/chatroom/:chatroomId", getMessages)
router.post("/:id/chatroom/:chatroomId", uploadchatImg.single("image"), sendImage)
router.get("/:id/artwork/:artworkId", viewWork)
router.post("/:id/addtocart", addToCart)
router.get("/:id/carts", getCart)
router.put("/:id/updatecartitem", updateCartItem)
router.delete("/:id/deleteitem/:artworkId", deleteCartItem)

export default router