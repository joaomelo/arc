import 'reflect-metadata';
import { join } from 'path';
import express from 'express';
import { createDbConnection } from './core/db';
import { applyGraphqlMiddleware } from './core/graphql';

import { loadDevFixture } from './modules/fixture';

async function main (): Promise<void> {
  await createDbConnection();
  await loadDevFixture();

  const app: express.Application = express();
  const port = 3000;

  await applyGraphqlMiddleware(app);

  const staticRoot = join(__dirname, 'public');
  app.use(express.static(staticRoot));

  app.get('/', (req, res) => {
    res.redirect('/index.html');
  });

  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
    console.log(`graphql at http://localhost:${port}/graphql`);
  });
}

main().catch(e => console.error(e));
