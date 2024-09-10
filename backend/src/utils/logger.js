const winston = require('winston')
const { format } = require('morgan')

// Create logger instance
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transport.File({filename: 'logs/error.log', level: 'error'}),
        new winston.transport.File({filename: 'logs/combined.log'}),
        new winston.transport.Console({
            format: winston.format.simple()
        })
    ]
})

module.exports = {logger}