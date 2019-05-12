"use strict";

/**
 * @author      Shankar
 * @description Serve the search operations through mongoose model
 * @param       req
 * @returns     res
 */

const Contact = require("../models/contact.model");

exports.findName = (req, res) => {
    Contact.find({name: req.body.search_value})
      .then(contacts => {
        res.send(contacts);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error occurred while trying to retrieve the contacts"
        });
      });
  };

  exports.findEmail = (req, res) => {
    Contact.find(
        {$or:[{"work.email": req.body.search_value},{"personal.email": req.body.search_value}]})
      .then(contacts => {
        res.send(contacts);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error occurred while trying to retrieve the contacts"
        });
      });
  };

  exports.findPhone = (req, res) => {
    Contact.find(
        {$or:[{"work.phone": req.body.search_value},{"personal.phone": req.body.search_value}]})
      .then(contacts => {
        res.send(contacts);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error occurred while trying to retrieve the contacts"
        });
      });
  };