export const ROUTER_ERRORS = {
  PRIVATE_ROUTE_WITHOUT_CREDENTIALS: {
    code: 'PRIVATE_ROUTE_WITHOUT_CREDENTIALS',
    message: 'The requested service requires proper credentials',
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