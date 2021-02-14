
module.exports = function(app){
    const usuarios = app.models.usuarios;
    const controller = {}

    controller.logIn = async (req, res) => {
        const {name, password} = req.body;
        
        const user = await usuarios.findOne({ where: { username : name }});

    // nome não encontrado no banco
        if (!user)
            res.sendStatus(401);

        //nome existe mais senhas não batem
        if(user.senha === password){

            const token = 'token-de-acesso'
            
            return res.status(200).json({
            user: {
                id: user.id,
                name: user.nome,
            },
            token,
            
            });

        }else{
            return response.json({success: false, message: 'passwords do not match'});
        }

    }

    controller.logOut = async(req, res)=>{
            return res.auth= undefined;
    }
    
    return controller;
}
