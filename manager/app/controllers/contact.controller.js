"use strict";

/**
 * @author      Shankar
 * @description Serve the CRUD actions through mongoose model
 * @param       req
 * @returns     res
 */

const Contact = require("../models/contact.model");

/**********************************************************************************
* Create and Store a new contact in DB
**********************************************************************************/
exports.create = (req, res) => {
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

/**********************************************************************************
* Retrieve the contacts list from DB
**********************************************************************************/
exports.findAll = (req, res) => {
  Contact.find()
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

/**********************************************************************************
* Find a single contact with contactId
**********************************************************************************/
exports.findOne = (req, res) => {
  Contact.findById(req.params.contactId)
    .then(contact => {
      if (!contact) {
        return res.status(404).send({
          message: `Contact not found with id --> ${req.params.contactId}`
        });
      }
      res.send(contact);
    })
    .catch(error => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: `Contact not found with id --> ${req.params.contactId}`
        });
      }
      return res.status(500).send({
        message: `Error retriving contact with id --> ${req.params.contactId}`
      });
    });
};

/**********************************************************************************
* Update the contact with contactId
***********************************************************************************/
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: `Contact shouldn't be empty`
        });
    }

    Contact.findByIdAndUpdate(req.params.contactId, 
        req.body,{new: true
    }).then(contact => {
        if(!contact){
            return res.status(404).send({
                message: `Contact cannot be found with id --> ${req.params.contactId}`
            });
        }
        res.send(contact);
    }).catch(error => {
        if(error.kind === 'ObjectId'){
            return res.status(404).send({
                message: `Contact cannot be found with id --> ${req.params.contactId}`
            });
        }
        return res.status(500).send({
            message: `Error while updating the contact with id --> ${req.params.contactId}`
        });
    });
};

/**********************************************************************************
* Delete a contact with the specified contactId
***********************************************************************************/
exports.delete = (req, res) => {
  Contact.findByIdAndRemove(req.params.contactId)
    .then(contact => {
      if (!contact) {
        return res.status(404).send({
          message: `Contact not found with id --> ${req.params.contactId}`
        });
      }
      res.send({ message: `Contact Deleted successfully` });
    })
    .catch(error => {
      if (error.kind === "ObjectId" || error.name === "NotFound") {
        return res.status(404).send({
          message: `Contact not found with id --> ${req.params.contactId}`
        });
      }

      return res.status(500).send({
        message: `Couldn't delete with id --> ${req.params.contactId}`
      });
    });
};
