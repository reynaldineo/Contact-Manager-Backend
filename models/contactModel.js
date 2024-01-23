const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide a name"],
    },
    email: {
      type: String,
      require: [true, "Please provide a email"],
    },
    phone: {
      type: String,
      require: [true, "Please provide a phone nummber"],
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
