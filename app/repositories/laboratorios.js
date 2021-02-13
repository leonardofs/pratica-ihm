const laboratorios = require("../models/laboratorios");



module.exports = function (app) {
    
    const Laboratorios = app.models.laboratorios
    let repository ={}

    repository.getAll= async()=>{
        try {
            
            console.log ('entrou no repositorio')
           let laboratorios = await Laboratorios.findAll();
           console.log ('recebeu repositorio do sequelize')
            return laboratorios;
        } catch (error) {
            console.log(error);
        }
    }

    return repository;
}
