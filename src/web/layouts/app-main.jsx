import React from 'react';
import { Redirect } from 'react-router-dom';
import { spaces, colors } from '@/shared/design';
import { PageUnsolved, PageAccount, PagePreferences } from '@/business/users';
import { PageArcs } from '@/business/arcs';

import { RoutePrivate } from './route-private';
import { RouteEntry } from './route-entry';

export const AppMain = () => {
  return (
    <main
      css={{
        backgroundColor: colors.light,
        padding: `${spaces.presumptuous} ${spaces.breathable} ${spaces.breathable}`
      }}
    >
      <RouteEntry path="/auth"><PageUnsolved /></RouteEntry>
      <RoutePrivate exact path="/"><Redirect to="/arcs" /></RoutePrivate>
      <RoutePrivate path="/arcs"><PageArcs /></RoutePrivate>
      <RoutePrivate path="/challenges"><p>Challenges</p></RoutePrivate>
      <RoutePrivate path="/account"><PageAccount /></RoutePrivate>
      <RoutePrivate path="/preferences"><PagePreferences /></RoutePrivate>
    </main>
  );
};
