const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        const decoded = jwt.verify(token, process.env);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status().json({
            message: 'Authentification failed'
        });
    }
};