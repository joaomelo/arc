import "reflect-metadata";
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

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
    console.log(`graphql at http://localhost:${port}/graphql`);
  });  
}

void main();

