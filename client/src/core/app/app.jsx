import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '__cli/core/apollo';
import { PageAuth } from '__cli/modules/users';

function App () {
  return (
    <ApolloProvider client={apolloClient}>
      <PageAuth />
    </ApolloProvider>
  );
}

export { App };
