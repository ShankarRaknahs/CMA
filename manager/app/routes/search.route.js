"use strict";

/**
 * @author      Shankar
 * @description Serve the routing actions for the application
 * @param       req
 * @returns     res
 */

module.exports = (app) => {
    const search = require('../controllers/search.controller.js');

/**********************************************************************************
* Routing to retrieve the contact list using group name
**********************************************************************************/
app.post('/search/name', search.findName);
app.post('/search/email', search.findEmail);
app.post('/search/phone', search.findPhone);
}