import { createConnection } from 'typeorm';
import { entities } from './entities';

async function createDbConnection(): Promise<void> {
  await createConnection({
    name: "default",
    type: "sqlite",
    database: ':memory:',
    synchronize: true,
    logging: ["error"],
    entities
  });
}

export { createDbConnection };