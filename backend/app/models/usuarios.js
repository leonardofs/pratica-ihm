//Includes
var Sequelize = require('sequelize');
//Module exports
module.exports = function(app) {
    //Declare model
    var Model = app.sequelize.define('usuarios',{  
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull:  false
        },
   
    },{
        //Disabled fields for not create automatic into table
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'usuarios'
    });
    //Returns
    return Model;
};
