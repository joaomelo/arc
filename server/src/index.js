import { resolve } from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import { appTitle, isProduction, getMode, getPort, getAddress } from '__com/meta';
import { bootstrapDb } from '__ser/core/db';
import { logger } from '__ser/core/log';
import { errorMiddleware } from '__ser/core/error';
import { router as authRouter } from './modules/auth';

async function main () {
  await bootstrapDb();

  const app = express();

  app.use(express.json());
  app.use(history({ verbose: !isProduction() }));

  const staticRoot = resolve(__dirname, 'public');
  app.use(express.static(staticRoot));

  app.use('/auth', authRouter);

  app.use(errorMiddleware);

  app.listen(getPort(), () => {
    logger.info(`${appTitle()} is running on ${getMode()} mode at ${getAddress()}`);
  });
}

main().catch(e => logger.error(e));
