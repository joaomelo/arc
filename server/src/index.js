import { appTitle, getMode, getPort, getAddress } from '__com/meta';
import { bootstrapDb } from '__ser/core/db';
import { logger } from '__ser/core/log';
import { createApp } from '__ser/core/router';

async function main () {
  await bootstrapDb();

  const app = createApp();

  const tagline = `${appTitle()} is running on ${getMode()} mode at ${getAddress()}`;

  app.get('/', (req, res) => res.type('text/plain').status(200).send(tagline));

  app.listen(getPort(), () => {
    logger.info(tagline);
  });
}

main().catch(e => logger.error(e));
