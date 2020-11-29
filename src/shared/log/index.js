import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.simple(),
  transports: [
    new transports.Console()
  ]
});

export { logger };
