import { appTitle, getMode, getPort, getAddress } from '__com/meta';
import { bootstrapDb } from '__ser/core/db';
import { logger } from '__ser/core/log';
import { createApp } from '__ser/core/router';

async function main () {
  await bootstrapDb();

  const app = createApp();
  app.listen(getPort(), () => {
    logger.info(`${appTitle()} is running on ${getMode()} mode at ${getAddress()}`);
  });
}

main().catch(e => logger.error(e));
