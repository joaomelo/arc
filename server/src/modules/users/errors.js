
const USERS_ERRORS = {
  EMAIL_ALREADY_IN_USE: {
    code: 'EMAIL_ALREADY_IN_USE',
    message: "Can't create or update a user with an e-mail already in use",
    httpStatus: 409,
    isOperational: true
  },
  INVALID_CREDENTIALS: {
    code: 'INVALID_CREDENTIALS',
    message: "User's email does not exist or failed to validate password",
    httpStatus: 401,
    isOperational: true
  },
  INVALID_TOKEN: {
    code: 'INVALID_TOKEN',
    message: 'The token is invalid or experied',
    httpStatus: 401,
    isOperational: true
  }
};

export { USERS_ERRORS };
