"use strict";

/**
 * @author      Shankar
 * @description Basic contact management contact model
 * @param       req
 * @returns     res
 */

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
    phone: {
        type: String,
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
