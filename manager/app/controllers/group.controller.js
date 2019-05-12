"use strict";

/**
 * @author      Shankar
 * @description Serve the grouping operations through mongoose model
 * @param       req
 * @returns     res
 */

const Contact = require("../models/contact.model");

exports.aggregate = (req, res) => {
  Contact.aggregate([
    {
      $match: { "tags": req.params.groupName }
    }
  ]).then(group => {
    if (!group) {
      return res.status(404).send({
        message: `Contact list not found with groupname --> ${
          req.params.groupName
        }`
      });
    }
    res.send(group);
  }).catch(error => {
      if(error){
          console.log(error);
          return res.status(404).send({
              message: `Contact list not found with groupname --> ${req.params.groupName}`
          });
      }
      return res.status(500).send({
        message: `Error retriving group with groupName--> ${req.params.groupName}`
      })
  })
};
