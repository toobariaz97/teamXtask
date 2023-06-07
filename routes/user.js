const express = require("express");
const { createUser, getUser } = require("../controllers/userController");
const { createRole } = require("../controllers/roleController");
const router = express.Router();

router.post('/create', createUser);
router.post('/role', createRole);
router.get("/:id", getUser)

module.exports = router;