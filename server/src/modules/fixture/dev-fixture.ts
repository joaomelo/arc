import { hash } from '__ser/core/crypt';
import { internet, company } from 'faker';
import { User } from '__ser/modules/users';
import { Arc, Membership, Role } from '__ser/modules/arcs';

async function loadDevFixture (): Promise<void> {
  const userQt = 100;  
  const arcsQt = Math.round(userQt / 10);
  const membersQt = Math.round(userQt / 10);

  const hashedPassword = await hash("test");
  await createFixtureUser("d@d.d", hashedPassword);
  for (let i = 0; i <= userQt; i++) {
    await createFixtureUser(internet.email(), hashedPassword);
  }

  const users = await User.find();
  const randomUser = () => users[Math.round(Math.random() * userQt)];

  for (let i = 0; i <= arcsQt; i++) {
    const arc = new Arc();

    arc.name = company.companyName();

    const memberships: Membership[] = [];

    const ownership = new Membership();
    ownership.arc = arc;
    ownership.user = randomUser();
    ownership.role = Role.Owner;
    memberships.push(ownership);

    for (let j = 0; j < membersQt; j++) {
      const membership = new Membership();
      membership.arc = arc;
      membership.user = randomUser();
      membership.role = Math.random() > 0.5 ? Role.Member : Role.Editor;
      memberships.push(membership);
    }

    arc.memberships = memberships;
    await arc.save();
  }
}

async function createFixtureUser(email: string, password: string): Promise<User> {
  const user = new User();
  user.email = email;
  user.password = password;
  await user.save();

  return user;
}

export { loadDevFixture };