"use strict";

/**
 * @author      Shankar
 * @todo        Handle the Logging of entire application
 * @description Log the messages execution process, handle error/info/warn/debug
 * @param       NIL
 * @returns     NIL
 */

const log4js = require("log4js");

var Logger = function(app) {
  this.app = app;
};

module.exports = Logger;

Logger.prototype.logUtility = function() {
  try {
/**
 * @todo change the static path
 */
    log4js.configure("C:/Users/User/OneDrive - TPF Software/Personal/Interviews/HappyFox/Project/CMA/manager/config/log4js.json");
    const log = log4js.getLogger("app");
    return log;
  } catch (error) {
    console.log(`Error in Logger module initialiation ==> ${error}, Exiting Process`);
    process.exit();
  }
};
