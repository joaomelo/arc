export class AppError extends Error {
  constructor ({ code, description, isOperational, runtimeContext }) {
    super(code);
    this.code = code;
    this.description = description;
    this.isOperational = isOperational;
    this.runtimeContext = runtimeContext || null;
    Error.captureStackTrace(this, AppError);
  }
}
