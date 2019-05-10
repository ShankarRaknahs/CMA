"use strict";

/**
 * @author      Shankar
 * @todo        Serve the entry point, handle environment (dev,qa,staging,prod)
 * @description Entry point for the Application
 * @param       NIL
 * @returns     NIL
 */

/**********************************************************************************
 * Logger module for CMA
 *********************************************************************************/
const Logger = require('../app/utility/log.utility');
this.logger = new Logger();
const log = this.logger.logUtility();
log.info(`Logging initiated for CMA`);

/**********************************************************************************
 * Environment Handling (dev/qa/staging/prod)
 *********************************************************************************/
const env = process.env.ENV || "dev";
const conf = require('../config/manager.config')[env];

/**********************************************************************************
 * Setup Middleware(Express) and execute the server
 *********************************************************************************/
const express = require('express');
const app = express();

app.listen(conf['server_port'], () => {
console.info("Contact Manager is listening in " + conf['server_port']);
});

