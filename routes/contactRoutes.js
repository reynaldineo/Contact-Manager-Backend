const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ msg: "Get all contacts" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ msg: `Get contact for ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ msg: "Create contacts" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ msg: `Update contacts for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ msg: `Delete contacts for ${req.params.id}` });
});

module.exports = router;
