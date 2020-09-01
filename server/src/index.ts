import 'reflect-metadata';
import { resolve } from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import { createDbConnection } from './core/db';
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
    console.log(`app running on ${process.env.NODE_ENV as string} mode`);
    console.log(`http at http://localhost:${port}`);
    console.log(`graphql at http://localhost:${port}/graphql`);
  });
}

main().catch(e => console.error(e));
