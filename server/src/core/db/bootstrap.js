import { MongoClient } from 'mongodb';
import { isProduction } from '__com/meta';
import { loadFixtures } from './fixtures';

let db;

async function bootstrapDb () {
  const client = new MongoClient(process.env.DB_URI, { useUnifiedTopology: true });
  await client.connect();

  db = client.db(process.env.DB_NAME);

  if (!isProduction()) {
    await loadFixtures(db);
  }

  return db;
}

export { bootstrapDb, db };
