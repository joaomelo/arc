import "reflect-metadata";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./domain";

async function main (): void {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  

  const app: express.Application = express();
  const port = 3000;
  
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });  
}

main();

