import faker from 'faker';

function randomIds (qt, sample) {
  const randomIds = [];
  for (let i = 0; i < qt; i++) {
    const index = Math.floor(Math.random() * sample.length);
    const item = sample[index];
    randomIds.push(item.id);
  }
  return randomIds;
}

function profilesFixture (qt) {
  const profiles = [];
  for (let i = 0; i < qt; i++) {
    const id = faker.random.uuid();
    const doc = {
      locale: 'en',
      isActive: true,
      nickname: faker.internet.userName(),
      publicEmail: faker.internet.email()
    };
    profiles.push({ id, doc });
  }
  return profiles;
}

function teamsFixture (qt, profiles) {
  const teams = [];
  for (let i = 0; i < qt; i++) {
    const id = faker.random.uuid();
    const doc = {
      isActive: true,
      name: faker.company.companyName(),
      owner: randomIds(1, profiles)[0],
      editors: randomIds(3, profiles),
      members: randomIds(7, profiles)
    };
    teams.push({ id, doc });
  }
  return teams;
}

function createFixture () {
  const profiles = profilesFixture(100);

  const fixedUsers = ['1vEpPUHD3NSPyMXwuXqLbXlRy9N2'];
  const profileSample = [...fixedUsers, ...profiles];
  const teams = teamsFixture(10, profileSample);

  const dbFixture = {
    profiles,
    teams
  };
  return dbFixture;
}

export { createFixture };
