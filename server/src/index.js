import { resolve } from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import { logger } from './core/log';
import { loadDevFixture } from './modules/fixture';
import { applyGraphqlMiddleware } from './core/graphql';

async function main (): Promise<void> {
  await createDbConnection();
  await loadDevFixture();

  const app: express.Application = express();
  const port = 3000;

  await applyGraphqlMiddleware(app);

  app.use(history());

  const staticRoot = resolve(__dirname, 'public');
  app.use(express.static(staticRoot));
  
  app.listen(port, () => {
    logger.info(`app running on ${process.env.NODE_ENV as string} mode`);
    logger.info(`http at http://localhost:${port}`);
    logger.info(`graphql at http://localhost:${port}/graphql`);
  });
}

main().catch(e => console.error(e));
