import 'reflect-metadata';
import { join } from 'path';
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

  const staticRoot = join(__dirname, 'public');
  app.use(express.static(staticRoot));

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
    console.log(`graphql at http://localhost:${port}/graphql`);
  });
}

main().catch(e => console.error(e));
