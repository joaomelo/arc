import { add, update, del } from '__cli/core/data';

const options = {
  collection: 'teams',
  isSafe: true
};

function addTeam (item) {
  return add(item, options);
}

function updateTeam (item) {
  return update(item, options);
}

function delTeam (id) {
  return del(id, options);
}

export { addTeam, updateTeam, delTeam };
