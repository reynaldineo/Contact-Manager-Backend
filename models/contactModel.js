const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
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
    timeStamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
