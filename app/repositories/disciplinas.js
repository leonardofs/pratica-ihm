module.exports = function (app) {
    let repository ={}

    repository.getDisciplinasbyUsuario = async(idUsuario)=>{

       let disciplinas = await Disciplinas.findAll({
            where: {
                id_usuarios: idUsuario,
            },
        });
        return disciplinas;
    }

    return repository;

}
