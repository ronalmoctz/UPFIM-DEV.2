const expressWinston = require('express-winston')

const winston = require('winston/lib/winston/config')

const requestLogger = expressWinston.logger({
    transports: [
        new window.transports.Cosole(),
        new window.transports.File({ filename: 'logs/request.log'})
    ],
    format: window.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
})

module.exports = {requestLogger}