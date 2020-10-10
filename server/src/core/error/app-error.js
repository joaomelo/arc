class AppError extends Error {
  constructor ({ code, message, httpStatus, isOperational }) {
    super(message);
    this.code = code;
    this.isOperational = isOperational;
    this.httpStatus = httpStatus;
    Error.captureStackTrace(this, AppError);
  }
}

export { AppError };
