import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver, findUserByToken } from '../../modules/user';
import { TeamResolver } from '../../modules/team';

async function applyGraphqlMiddleware (app: express.Application): Promise<void> {
  const schema = await buildSchema({
    resolvers: [TeamResolver, UserResolver],
  });
  const apolloServer = new ApolloServer({ 
    schema,
    context: async ({ req }) => {
      const token =  req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : '';
      const user = await findUserByToken(token);
      return { user };
    }
  });  
  apolloServer.applyMiddleware({ app });
}

export { applyGraphqlMiddleware };
