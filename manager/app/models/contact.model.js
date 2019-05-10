const mongoose = require("mongoose");
let validator = require('validator');

const ContactSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: value => {
        return validator.isEmail(value);
      }
    },
    Phone: {
        type: Number,
        required: true,
        unique: true,
        validate: value => {
            return validator.isMobilePhone(value);
        }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
