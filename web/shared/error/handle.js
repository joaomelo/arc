import { logger } from '__ser/shared/log';

function handleError (error) {
  const log = error.isOperational ? logger.warn : logger.error;
  log(error);

  return error.isOperational;
}

export { handleError };
