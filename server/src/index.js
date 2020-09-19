import { resolve } from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import { appTitle, isProduction, getMode, getPort, getAddress } from '__com/meta';
import { logger } from '__ser/core/log';
import { bootstrapDb } from '__ser/core/db';
import { router as userRouter } from './modules/users';

async function main () {
  await bootstrapDb();

  const app = express();

  app.use(express.json());
  app.use(history({ verbose: !isProduction() }));

  const staticRoot = resolve(__dirname, 'public');
  app.use(express.static(staticRoot));

  app.use('/users', userRouter);

  app.listen(getPort(), () => {
    logger.info(`${appTitle()} is running on ${getMode()} mode at ${getAddress()}`);
  });
}

main().catch(e => console.error(e));
