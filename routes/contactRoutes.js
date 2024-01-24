const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  createContact,
  deleteContact,
  updateContact,
} = require("./../controllers/contactController");
const validateToken = require("../middleware/vallidateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
