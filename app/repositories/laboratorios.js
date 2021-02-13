const laboratorios = require("../models/laboratorios");

module.exports = function (app) {
    
    let repository ={}

    repository.getAll= async()=>{

       let laboratorios = await laboratorios.findAll();
        return laboratorios;
    }

    return repository;
}
