module.exports = function (app) {
    let repository ={}

    repository.getCursosbyUsuarios = async(idUsuario)=>{

       let cursos = await usuariosCursos.findAll({
        where: {
            id_usuarios: idUsuario,
        },
        include: cursos 
        });

        return cursos;
    }

    return repository;

}
