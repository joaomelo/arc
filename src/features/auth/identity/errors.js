import { AppError } from '../../../app/error';

export class EmailAlreadyInUseError extends AppError {
  constructor () {
    super({
      code: 'EMAIL_ALREADY_IN_USE',
      description: 'auth.error-email-already-in-use',
      isOperational: true
    });
    Error.captureStackTrace(this, EmailAlreadyInUseError);
  }
}

export class CredentialsUnrecognizedError extends AppError {
  constructor () {
    super({
      code: 'CREDENTIALS_UNRECOGNIZED',
      description: 'auth.error-credentials-unrecognized',
      isOperational: true
    });
    Error.captureStackTrace(this, CredentialsUnrecognizedError);
  }
}
