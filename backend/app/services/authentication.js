module.exports = function(req,res,next){

    const authHeader = req.headers.authorization;
   
    if (!authHeader) {
        //sem token no header
      return res.status(401).json({ error: 'Token not provided' });
    }
        //tira o texto 'bearer'
    const [, token] = authHeader.split(' ');

    try {
        if(token ==='token-de-acesso'){ 
             next();
        } else {
            return res.status(401).json({ error: 'Token invalid' });
        }
    } catch (error) {
      //console.log(error); 
      return res.status(501).json({ error: 'Internal Server Error' });
    }    
}
