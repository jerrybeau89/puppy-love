const jwt = require('jsonwebtoken');
require('dotenv').config();

//authentification function
module.exports = {
    verifyToken(req, res, next) {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
          return res.status(401).json({ message: 'No authorization header found' });
        }
        const token = authorizationHeader.split(' ')[1];
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.userId = decoded.id;
          next();
        } catch (error) {
          console.log(error);
          return res.status(401).json({ message: 'Invalid token' });
        }
    }
}