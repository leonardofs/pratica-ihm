//includes
var express = require("express");
var consign = require("consign");
var sequelize = require("./sequelize")();

//exports
module.exports = function (){
    //Variables
    var app = express();
    //enviroment
    app.debug = process.env.NODE_DEBUG || false;
    //set global Variables
    app.sequelize = sequelize.getConnection();
    //END ORMS

    //Loading dependencies
    consign({cwd: 'app', verbose: false})
        .include("models")
        .then("controllers")
        .then("routes")
        .into(app);
    //return
    return app;
};
