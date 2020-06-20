import { extractUsernameFromEmail } from '__cli/core/auth/domain/client/src/common/helpers';
import { subscribe } from 'client/src/modules/teams/domain/@joaomelo/bus';
import { i18n } from '__cli/core/profiles/data/client/src/core/i18n';
import { AUTH_EVENTS } from '__cli/core/profiles/data/client/src/modules/auth';
import { pullUserTeams, addTeam } from '../data';

function bindTeamSetup () {
  subscribe(AUTH_EVENTS.USER_LOGGEDIN, setupTeam, true);
}

async function setupTeam ({ user }) {
  const teams = await pullUserTeams(user);
  if (!teams || teams.length === 0) {
    createUserDefaultTeam(user);
  }
}

function createUserDefaultTeam (user) {
  const username = extractUsernameFromEmail(user.email);

  const defaultTeam = {
    title: i18n.t('modules.teams.defaultTeam', { user: username }),
    owner: user
  };
  addTeam(defaultTeam);
}

export { bindTeamSetup };
