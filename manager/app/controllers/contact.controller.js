const Contact = require("../models/contact.model");

//Create and Save a new contact
exports.create = (req, res) => {
  console.log(req.body);
  // Validate the request
  if (!req.body) {
    return res.status(400).send({
      message: "Contact details are empty"
    });
  }

  const contact = new Contact(req.body);

  //Save contact in the database
  contact
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the contact"
      });
    });
};

// Retrieve and list all contacts from DB
exports.findAll = (req, res) => {};

//Find a single contact with contactId
exports.findOne = (req, res) => {};

//Update a contact with the contactId
exports.update = (req, res) => {};

//Delete a contact with the specified contactId
exports.delete = (req, res) => {};
