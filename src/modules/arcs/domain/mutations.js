import { add, update, del } from '__cli/core/data';

const options = {
  collection: 'arcs',
  isSafe: true
};

function addArc (item) {
  return add(item, options);
}

function updateArc (item) {
  return update(item, options);
}

function delArc (id) {
  return del(id, options);
}

export { addArc, updateArc, delArc };
