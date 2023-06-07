const express = require("express");
const { createUser } = require("../controllers/userController");
const { createRole } = require("../controllers/roleController");
const router = express.Router();

router.post('/create', createUser);
router.post('/role', createRole)

module.exports = router;