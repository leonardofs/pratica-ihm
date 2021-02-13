module.exports = function (app) {

 const controller = {}
 const laboratoriosRepository = app.repositories.laboratorios;

 controller.getAll = async(req, res)=>{

    try {
        let laboratorios = await laboratoriosRepository.getAll();
        
        if (laboratorios){
            return res.status(200).json( {...laboratorios})
        }
    } catch (error) {
        res.status(500);
    }
 }








 return controller;

}