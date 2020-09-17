import { resolve } from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import { appTitle, isProduction, getMode, getPort, getAddress } from '__com/meta';
import { logger, loggerJSON } from '__ser/core/log';

async function main () {
  const app = express();

  app.use(express.json());
  app.use(history({ verbose: !isProduction() }));

  const staticRoot = resolve(__dirname, 'public');
  app.use(express.static(staticRoot));

  // TODO move route to users package
  app.post('/users/signin', (req, res) => {
    const data = req.body;
    loggerJSON(data);
    res.send('auth');
  });

  app.listen(getPort(), () => {
    logger.info(`${appTitle()} is running on ${getMode()} mode at ${getAddress()}`);
  });
}

main().catch(e => console.error(e));
