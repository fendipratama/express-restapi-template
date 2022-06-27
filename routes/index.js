"use strict";

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "Your template is ready to launch...",
  });
});

module.exports = router;
