class AppError extends Error {
    constructor(message, statusCode, isOperational) {
        super(message);
        isOperational = true;

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;