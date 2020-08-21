import { internet, company } from 'faker';

import { User } from '../user';
import { Team, TeamMembership, Role } from '../team';

async function loadDevFixture (): Promise<void> {
  const userQt = 100;  
  const teamsQt = userQt / 10;

  for (let i = 0; i <= userQt; i++) {
    const user = new User();
    user.email = internet.email();
    user.locale = "en";
    user.password = internet.password();
    await user.save();
  }

  const users = await User.find();
  const randomUser = () => users[Math.round(Math.random() * userQt)];

  for (let i = 0; i <= teamsQt; i++) {
    const team = new Team();

    team.name = company.companyName();

    const memberships: TeamMembership[] = [];

    const ownership = new TeamMembership();
    ownership.team = team;
    ownership.user = randomUser();
    ownership.role = Role.Owner;
    memberships.push(ownership);

    const membersQt = Math.round(Math.random() * 20);
    for (let j = 0; j < membersQt; j++) {
      const membership = new TeamMembership();
      membership.team = team;
      membership.user = randomUser();
      membership.role = Math.random() > 0.5 ? Role.Member : Role.Editor;
      memberships.push(membership);
    }

    team.memberships = memberships;
    await team.save();
  }
}

export { loadDevFixture };