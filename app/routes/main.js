module.exports = function (app) {
 //TODO

    const laboratoriosController = app.controllers.laboratorios;
    app.route('/api/laboratorios/')
        .get(laboratoriosController.getAll);
    app.route('/api/check/video/:application')
        .get(controller.checkVideoApp);
    app.route("*")
        .get(controller.rodando)


}