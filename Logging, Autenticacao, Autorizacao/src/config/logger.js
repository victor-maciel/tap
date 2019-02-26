const winston = require('winston');

const logger = winston.createLogger({

    level: 'info',

    transports: [

        new winston.transports.File({ level: 'error', filename: 'erros.log' }),

        new winston.transports.File({ filename: 'combinado.log' }),

    ]

});

if (process.env.NODE_ENV !== 'production') {

    logger.add(new winston.transports.Console());
}