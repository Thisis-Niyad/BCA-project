import express from "express"

const router = express.Router();

router.post("/", (req, res) => {
    const { Name, email, password } = req.body;
    console.log(Name, email, password);

})

export default router