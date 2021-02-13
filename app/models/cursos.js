//Includes
var Sequelize = require('sequelize');
//Module exports
module.exports = function(app) {
    //Declare model
    var Model = app.sequelize.define('cursos',{  
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        }
    },{
        //Disabled fields for not create automatic into table
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'cursos'
    });
    //Returns
    return Model;
};
