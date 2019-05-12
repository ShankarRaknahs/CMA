"use strict";

/**
 * @author      Shankar
 * @description Serve the routing actions for the application
 * @param       req
 * @returns     res
 */

module.exports = (app) => {
    const groups = require('../controllers/group.controller.js');

/**********************************************************************************
* Routing to retrieve the contact list using group name
**********************************************************************************/
app.get('/groups/:groupName', groups.aggregate);


}