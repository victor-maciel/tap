const jwt = require('jsonwebtoken');
const constantes = require('../config/constantes');

const seguranca = {
    autorizaJWT: (req, res, next) => {

        if (!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer')
            return res.status(401).send({ auth: false, message: 'Token não informado' });

        let token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, constantes.JWT_SECRECT, (err, decoded) => {
            if (err)
                return res.status(500).send({
                    auth: false, message: 'Token não autenticado.'

                });

            req.user = { // adiciona o usuário ao request
                username: decoded.username,
                roles: decoded.roles,
                email: decoded.email
            };
            next();
        });

    }

}

module.exports = seguranca;