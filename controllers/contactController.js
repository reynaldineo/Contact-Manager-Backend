//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ msg: "Get all contacts" });
};

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ msg: `Get contact for ${req.params.id}` });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  res.status(201).json({ msg: "Create contacts" });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ msg: `Update contacts for ${req.params.id}` });
};

//@desc Delete new contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ msg: `Delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
