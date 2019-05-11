module.exports = (app) => {
    const contacts = require('../controllers/contact.controller.js');

    // Create a new contact
    app.post('/contacts', contacts.create);

    // List all Contacts
    app.get('/contacts', contacts.findAll);

    //Retrieve a single contact with contactId
    app.get('/contacts/:contactId', contacts.findOne);

    //Update a contact with contactId
    app.put('/contacts/:contactId', contacts.update);

    //Delete a contact with contactId
    app.delete('/contacts/:contactId', contacts.delete);
}