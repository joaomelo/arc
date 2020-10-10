import { handleError } from './handle';

function errorMiddleware (err, req, res, next) {
  const isOperationalError = handleError(err);
  if (isOperationalError) {
    res.status(err.httpStatus).send(err.message);
  } else {
    next(err);
  }
}

export { errorMiddleware };
