import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from '../../modules/user';
import { TeamResolver } from '../../modules/team';

async function applyGraphqlMiddleware (app: express.Application): Promise<void> {
  const schema = await buildSchema({
    resolvers: [TeamResolver, UserResolver],
  });
  const apolloServer = new ApolloServer({ schema });  
  apolloServer.applyMiddleware({ app });
}

export { applyGraphqlMiddleware };

