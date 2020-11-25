import { hash } from '__ser/shared/crypt';
import { internet } from 'faker';
// import { internet, company } from 'faker';
// import { User } from '__ser/business/users';
// import { Arc, Membership, Role } from '__ser/business/arcs';

const userQt = 20;
// const arcsQt = Math.round(userQt / 10);
// const membersQt = Math.round(userQt / 10);

async function loadFixtures (db) {
  const users = db.collection('users');

  const cursor = users.find({});
  const count = await cursor.count();
  if (count > 0) return;

  const password = await hash('12345678');
  const locale = 'en';
  const usersDocs = [{ email: 'd@d.net', password, preferences: { locale } }];
  for (let i = 0; i <= userQt; i++) {
    usersDocs.push({ email: internet.email(), password, preferences: { locale } });
  }
  await users.insertMany(usersDocs);

  // const users = await User.find();
  // const randomUser = () => users[Math.round(Math.random() * userQt)];

  // for (let i = 0; i <= arcsQt; i++) {
  //   const arc = new Arc();

  //   arc.name = company.companyName();

  //   const memberships[] = [];

  //   const ownership = new Membership();
  //   ownership.arc = arc;
  //   ownership.user = randomUser();
  //   ownership.role = Role.Owner;
  //   memberships.push(ownership);

  //   for (let j = 0; j < membersQt; j++) {
  //     const membership = new Membership();
  //     membership.arc = arc;
  //     membership.user = randomUser();
  //     membership.role = Math.random() > 0.5 ? Role.Member : Role.Editor;
  //     memberships.push(membership);
  //   }

  //   arc.memberships = memberships;
  //   await arc.save();
  // }
}

export { loadFixtures };
