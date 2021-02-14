//Includes
var Sequelize = require('sequelize');
//Module exports
module.exports = function(app) {

    //Declare model
    var Model = app.sequelize.define('usuarios_cursos',{  
        id_usuarios: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },
        id_cursos: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'cursos',
                key: 'id'
            }
        },
   
    },{
        //Disabled fields for not create automatic into table
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true,
        tableName: 'usuarios_cursos'
    });
    //Returns
    return Model;
};
