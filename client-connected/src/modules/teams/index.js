// kickstarting module
import { bindTeamSetup } from './domain';
import { bindTeams } from './data';

bindTeamSetup();
bindTeams();

// export public asssets
export { TeamsList } from './ui';
