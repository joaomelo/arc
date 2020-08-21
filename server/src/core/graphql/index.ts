import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RegisterResolver } from '../../modules/user';

async function applyGraphqlMiddleware (app: express.Application): Promise<void> {
  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });
  const apolloServer = new ApolloServer({ schema });  
  apolloServer.applyMiddleware({ app });
}

export { applyGraphqlMiddleware };

