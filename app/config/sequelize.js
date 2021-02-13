
//Includes
var Sequelize = require('sequelize');
//exports
module.exports = function() {
    //Variables
    var controller = {};

    /**
     * getConfig
     * @return {Object} config
     */
    function getConfig() {
        //Variables
            var config = {
                host: 'db',
                database: 'laboratorios',
                user: 'root',
                pass: 'senha',
                adapter: 'mysql',
                reconnect: true,
                logging: false
            };
            console.log("Sequelize connected in production mode...");
        
        //return config
        return config;
    }

    /**
     * getConnection
     * @return {Object} connection
     */
    controller.getConnection = function() {
        //Variables
        var config = getConfig();
        var connection = new Sequelize(config.database, config.user,config.pass, 
        {
            host: config.host,
            dialect: config.adapter,
            reconnect: config.reconnect,
            logging: config.logging
        });
        //return
        return connection;
    };

    //return
    return controller;
};
