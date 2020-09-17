import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.simple(),
  transports: [
    new transports.Console()
  ]
});

function loggerJSON (payload) {
  logger.info(JSON.stringify(payload));
}

export { logger, loggerJSON };
