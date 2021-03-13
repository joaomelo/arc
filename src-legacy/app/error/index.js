export class AppError extends Error {
  constructor ({ code, isOperational, description, meta = {} }) {
    super(code);
    this.code = code;
    this.isOperational = isOperational;
    this.description = description;
    this.meta = meta;

    Error.captureStackTrace(this, AppError);
  }
}
