//Includes
var Sequelize = require('sequelize');

//Module exports
module.exports = function(app) {
    //Declare model
    var Model = app.sequelize.define('horarios',{  
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        inicio_do_horario: {
          type: Sequelize.STRING,
          allowNull: false
        },     
        fim_do_horario: {
            type: Sequelize.STRING,
            allowNull: false
        },
        turno: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        //Disabled fields for not create automatic into table
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'horarios'
    });
    //Returns
    return Model;
};
