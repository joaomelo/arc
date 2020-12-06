import { AppError } from '@/shared/error';

export class EmailAlreadyInUseError extends AppError {
  constructor () {
    super({
      code: 'EMAIL_ALREADY_IN_USE',
      description: 'users.errors.email-already-in-use',
      isOperational: true
    });
    Error.captureStackTrace(this, EmailAlreadyInUseError);
  }
}

export class CredentialsUnrecognizedError extends AppError {
  constructor () {
    super({
      code: 'CREDENTIALS_UNRECOGNIZED',
      description: 'users.errors.credentials-unrecognized',
      isOperational: true
    });
    Error.captureStackTrace(this, CredentialsUnrecognizedError);
  }
}
