var conf = {
    dev: {
        database_url : "mongodb://localhost:27017/CMA",
        server_port  : 3333
    },

    prod: {
        database_url : "",
        server_port  : 8080
    }
  };
  
  module.exports = conf;
  