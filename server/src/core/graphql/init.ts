import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { extractUserIdFromToken } from '../jwt';
import { UserResolver } from '__ser/modules/users';
import { ArcResolver } from '__ser/modules/arcs';

async function applyGraphqlMiddleware (app: express.Application): Promise<void> {
  const schema = await buildSchema({
    resolvers: [ArcResolver, UserResolver],
  });
  const apolloServer = new ApolloServer({ 
    schema,
    context: ({ req }) => {
      const token =  req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : '';
      const userId = extractUserIdFromToken(token);
      return { userId };
    }
  });  
  apolloServer.applyMiddleware({ app });
}

export { applyGraphqlMiddleware };
