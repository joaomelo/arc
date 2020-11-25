export const EMAIL_ALREADY_IN_USE = {
  code: 'EMAIL_ALREADY_IN_USE',
  message: "Can't create or update a user with an e-mail already in use",
  httpStatus: 409,
  isOperational: true
};

export const CREDENTIALS_INVALID = {
  code: 'CREDENTIALS_INVALID',
  message: 'Credentials must conform to a valid email and minimal length password',
  httpStatus: 422,
  isOperational: true
};

export const CREDENTIALS_UNRECOGNIZED = {
  code: 'CREDENTIALS_UNRECOGNIZED',
  message: "User's email does not exist or failed to validate password",
  httpStatus: 401,
  isOperational: true
};
