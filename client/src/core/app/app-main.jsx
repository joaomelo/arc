import React from 'react';
import { Redirect } from 'react-router-dom';
import { spaces, colors } from '__cli/core/design';
import { PageAuth, PageAccount } from '__cli/modules/auth';
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
      <RoutePrivate path="/arcs"><p>Arcs</p></RoutePrivate>
      <RoutePrivate path="/challenges"><p>Challenges</p></RoutePrivate>
      <RoutePrivate path="/account"><PageAccount /></RoutePrivate>
    </main>
  );
};
