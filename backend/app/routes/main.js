const Authentication = require('../services/authentication');

module.exports = function (app) {
    const LaboratoriosController = app.controllers.laboratorios;
    const SessionController = app.controllers.sessionController;
 

    app.route('/login')
        .post(SessionController.logIn);

    app.route('/logout')
        .post(SessionController.logOut);
        
    // rotas abaixo são privadas a login    
    app.use(Authentication); 
        

    app.route('/api/laboratorios/')
        .get(LaboratoriosController.getAll);

    //TODO
    //app.route('/api/check/video/:application')
    //    .get(controller.checkVideoApp);
    //app.route("*")
    //    .get(controller.rodando)


}

/// EXEMPLOS

//cria usuario
// router.post('/user', UserController.store);


// // rotas abaixo são privadas a login
// router.use(Authentication);

// router.get('/packets', PacketsController.index );

// router.get('/user/:id',Authorization(['super_admin', 'admin']),  UserController.byId)

// router.get('/users', Authorization(['super_admin', 'admin']),  UserController.index);

// router.post('/user/delete/:id', Authorization(['super_admin', 'admin']), UserController.delete);

// router.post('/user/update', Authorization(['super_admin', 'admin']), UserController.update);

