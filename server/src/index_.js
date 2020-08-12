// const express = require('express');
// const app = express();
// const port = 3000;

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const apolloServer = new ApolloServer({ typeDefs });

apolloServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
