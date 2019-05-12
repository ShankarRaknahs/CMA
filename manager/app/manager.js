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
const Logger = require("../app/utility/log.utility");
this.logger = new Logger();
const log = this.logger.logUtility();
log.info(`Logging initiated for CMA`);

/**********************************************************************************
 * Environment Handling (dev/qa/staging/prod)
 *********************************************************************************/
const env = process.env.ENV || "dev";
const conf = require("../config/manager.config")[env];
log.info(`App is running in -->${env}<-- environment`);

/**********************************************************************************
 * Database connection validation
 *********************************************************************************/
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Connecting to the Database
mongoose
  .connect(conf["database_url"], {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    log.info(`Connected to the DB`);
    if (env == "dev") {
      console.log("Connected to the DB");
    }
  })
  .catch(err => {
      log.error('Error in connecting to the DB');
      if (env == "dev") {
        console.error(`Error in connecting to the DB`);
      } 
      process.exit();
  })

/**********************************************************************************
 * Setup Middleware(Express) and execute the server
 *********************************************************************************/
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/contact.route")(app);
require("./routes/group.route")(app);

app.listen(conf["server_port"], () => {
  console.info("Contact Manager is listening in " + conf["server_port"]);
});
