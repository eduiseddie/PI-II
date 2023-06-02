const verifyToken = require("../tools/verifyToken");
const express = require("express");
const router = express.Router();

const auth = require("./auth/index");

router.use("/auth", auth);

module.exports = router;