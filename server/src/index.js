import { resolve } from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import { appTitle, isProduction, getMode, getPort, getAddress } from '__com/meta';
import { bootstrapDb } from '__ser/core/db';
import { logger } from '__ser/core/log';
import { errorMiddleware } from '__ser/core/error';
import { router as authRouter, authenticateTokenHandler } from './modules/users';

async function main () {
  await bootstrapDb();

  const app = express();

  app.use(express.json());
  app.use(history({ verbose: !isProduction() }));

  const staticRoot = resolve(__dirname, 'public');
  app.use(express.static(staticRoot));

  app.use(authenticateTokenHandler);

  app.use('/users', authRouter);

  app.use(errorMiddleware);

  app.listen(getPort(), () => {
    logger.info(`${appTitle()} is running baby! on ${getMode()} mode at ${getAddress()}`);
  });
}

main().catch(e => logger.error(e));
