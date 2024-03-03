var jwt = require('jsonwebtoken');
const JWT_SECRET = "red";

const fetchemployer = (req, res, next) => {
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "Please authenticate a valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.employer = data.employer;
    next()
    } catch (error) {
        res.status(401).send({error : "Please authenticate a valid token"})
    }
    
}

module.exports = fetchemployer