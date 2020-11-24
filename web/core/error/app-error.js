class AppError extends Error {
  constructor ({ code, message, httpStatus, isOperational }, runtimeContext = null) {
    super(message);
    this.code = code;
    this.isOperational = isOperational;
    this.httpStatus = httpStatus;
    this.runtimeContext = runtimeContext;
    Error.captureStackTrace(this, AppError);
  }
}

export { AppError };
