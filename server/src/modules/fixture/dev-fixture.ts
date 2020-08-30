import { hash } from 'bcryptjs';
import { internet, company } from 'faker';
import { User, Locale } from '../user';
import { Team, Membership, Role } from '../team';

async function loadDevFixture (): Promise<void> {
  const userQt = 100;  
  const teamsQt = Math.round(userQt / 10);
  const membersQt = Math.round(userQt / 10);

  const hashedPassword = await hash("unsecure", 12);
  for (let i = 0; i <= userQt; i++) {
    await createFixtureUser(internet.email(), hashedPassword);
  }

  const users = await User.find();
  const randomUser = () => users[Math.round(Math.random() * userQt)];

  for (let i = 0; i <= teamsQt; i++) {
    const team = new Team();

    team.name = company.companyName();

    const memberships: Membership[] = [];

    const ownership = new Membership();
    ownership.team = team;
    ownership.user = randomUser();
    ownership.role = Role.Owner;
    memberships.push(ownership);

    for (let j = 0; j < membersQt; j++) {
      const membership = new Membership();
      membership.team = team;
      membership.user = randomUser();
      membership.role = Math.random() > 0.5 ? Role.Member : Role.Editor;
      memberships.push(membership);
    }

    team.memberships = memberships;
    await team.save();
  }
}

async function createFixtureUser(email: string, password: string): Promise<User> {
  const user = User.create({
    email,
    password,
    locale: Locale.en
  });
  await user.save();

  return user;
}

export { loadDevFixture };