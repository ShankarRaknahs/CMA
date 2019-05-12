"use strict";

/**
 * @author      Shankar
 * @description Serve the routing actions for the application
 * @param       req
 * @returns     res
 */

module.exports = (app) => {
    const contacts = require('../controllers/contact.controller.js');

/**********************************************************************************
* Routing for creating a new contact
**********************************************************************************/
    app.post('/contacts', contacts.create);
/**********************************************************************************
* Routing to list all the contacts
**********************************************************************************/
    app.get('/contacts', contacts.findAll);
/**********************************************************************************
* Routing to retrieve a contact with contact id
**********************************************************************************/
    app.get('/contacts/:contactId', contacts.findOne);
/**********************************************************************************
* Routing to update a contact with contact id
**********************************************************************************/
    app.put('/contacts/:contactId', contacts.update);
/**********************************************************************************
* Routing to delete a contact with contact id
**********************************************************************************/
    app.delete('/contacts/:contactId', contacts.delete);
}