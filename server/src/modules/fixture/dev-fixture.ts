import { internet, company } from 'faker';

import { User, createUser } from '../user';
import { Team, TeamMembership, Role } from '../team';

async function loadDevFixture (): Promise<void> {
  const userQt = 10;  
  const teamsQt = Math.round(userQt / 10);

  for (let i = 0; i <= userQt; i++) {
    await createUser(internet.email(), "unsecure");
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