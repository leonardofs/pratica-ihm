//includes
var express = require("express");
var consign = require("consign");
var sequelize = require("./sequelize")();
const bodyParser = require('body-parser');

//exports
module.exports = function (){
    //Variables
    var app = express();
    //enviroment
    app.debug = process.env.NODE_DEBUG || false;
    //set global Variables
    app.sequelize = sequelize.getConnection();
    //END ORMS
    app.use(bodyParser.urlencoded({limit: '50mb',extended: true, parameterLimit: 1000000}));
    app.use(bodyParser.json({limit: '50mb'}));


    app.disable('x-powered-by'); //Hidde
    //Loading dependencies
    consign({cwd: 'app', verbose: false})
        .include("models")
        .then("repositories")
        .then("controllers")
        .then("routes")
        .into(app);
    //return
    return app;
};
