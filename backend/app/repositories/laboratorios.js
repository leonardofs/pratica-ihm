const laboratorios = require("../models/laboratorios");



module.exports = function (app) {
    
    const Laboratorios = app.models.laboratorios
    let repository ={}

    repository.getAll= async()=>{
        try {

           let laboratorios = await Laboratorios.findAll();

            return laboratorios;
        } catch (error) {
            console.log(error);
        }
    }

    return repository;
}
