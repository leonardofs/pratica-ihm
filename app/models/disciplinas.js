
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
        id_usuarios: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },
        id_cursos: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'cursos',
                key: 'id'
            }
        },
        turno: {
            type: Sequelize.STRING,
            allowNull: false
        },
        periodo: {
            type: Sequelize.STRING,
            allowNull:  false
        },
        ativo: {
            type: Sequelize.BOOLEAN,
            allowNull:  false
        } 
    },{
        //Disabled fields for not create automatic into table
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'disciplinas'
    });
    //Returns
    return Model;
};
