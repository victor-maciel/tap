const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const constantes = require('../config/constantes');

router.post('/login', (req, res) => {
    if (req.body.username === 'admin' &&
        req.body.password === 'admin') {

        let payload = {
            username: 'admin',
            roles: ['ADMIN', 'USER'],
            email: 'admin@email.com'
        };

        var token = jwt.sign({ payload }, constantes.JWT_SECRECT, {
            expiresIn: 300 // 5 minutos
        });

        res.status(200).send({ auth: true, token: token });

    } else if (req.body.username === 'user' &&
        req.body.password === 'user') {

        let payload = {
            username: 'user',
            roles: ['USER'],
            email: 'user@email.com'
        };

        var token = jwt.sign({ payload }, constantes.JWT_SECRECT, {
            expiresIn: 300 // 5 minutos
        });

        res.status(200).send({ auth: true, token: token });
    } else {
        res.status(500).send('Login inválido! ');
    }
}


);

module.exports = router;