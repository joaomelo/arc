import React from 'react';
import { Redirect } from 'react-router-dom';
import { spaces, colors } from '__cli/core/design';
import { PageAuth, PageAccount, PagePreferences } from '__cli/modules/users';
import { PageArcs } from '__cli/modules/arcs';

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
      <RouteEntry path="/auth"><PageAuth /></RouteEntry>
      <RoutePrivate exact path="/"><Redirect to="/arcs" /></RoutePrivate>
      <RoutePrivate path="/arcs"><PageArcs /></RoutePrivate>
      <RoutePrivate path="/challenges"><p>Challenges</p></RoutePrivate>
      <RoutePrivate path="/account"><PageAccount /></RoutePrivate>
      <RoutePrivate path="/preferences"><PagePreferences /></RoutePrivate>
    </main>
  );
};
