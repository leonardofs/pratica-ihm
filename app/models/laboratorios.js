//Includes
var Sequelize = require('sequelize');
//Module exports
module.exports = function(app) {
    //Declare model
    var Model = app.sequelize.define('laboratorios',{  

	
regras	text NULL
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
        localizacao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        capacidade: {
            type: Sequelize.INTEGER,
            allowNull:  false
        },
        regras: {
            type: Sequelize.TEXT,
            allowNull: true
        }
   
    },{
        //Disabled fields for not create automatic into table
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'laboratorios'
    });
    //Returns
    return Model;
};
