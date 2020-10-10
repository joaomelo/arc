import { handleError } from './handle';

function errorMiddleware (err, req, res, next) {
  handleError(err);
  const isOperationalError = handleError(err);
  if (isOperationalError) {
    res.status(err.httpStatus).send(err.message);
  } else {
    next(err);
  }
}

export { errorMiddleware };
