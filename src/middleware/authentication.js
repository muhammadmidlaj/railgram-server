const jwt = require('jsonwebtoken');

const authentication = async function(req, res, next){
    try {
        const authToken = req.headers.authorization;
        if (!authToken) {
            return res.status(401).json({error: 'no auth token, access denide'});
            
        } else {
            let token = authToken.split(" ")[1];
            const verified = jwt.verify(token,'secret');
            if (!verified) {
                return res.status(401).json({error:'token verification faailed'});
                
            }else{
                next();
            }
            
        }
    } catch (error) {
        res.status(500).send('error occured');
    }
}

module.exports = authentication;