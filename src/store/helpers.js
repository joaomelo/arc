import { bind } from '@/firebase';
import { firstUpper, firstUpperPlural } from '@/helpers/string.js';

const collections = {
  assets: 'assets',
  results: 'results',
  challenges: 'challenges',
  teams: 'teams',
  profiles: 'profiles'
};

function mapStoreFunction (collection, funcType) {
  const type = collection[collection.length - 1] === 's' ? collection.slice(0, -1) : collection;

  const functions = {
    getterCol: `get${firstUpperPlural(type)}`,
    getterSingle: `get${firstUpper(type)}`,
    binAction: `set${firstUpperPlural(type)}`,
    colMutation: `commit${firstUpperPlural(type)}`,
    addAction: `add${firstUpper(type)}`,
    setAction: `set${firstUpper(type)}`,
    delAction: `del${firstUpper(type)}`
  };

  return functions[funcType];
}

function mapAllBinders () {
  const cols = Object.keys(collections);
  return cols.map(c => mapStoreFunction(c, 'binAction'));
}

function setCollection (commit, collection) {
  commit('startedLoad', collection);
  return bind(
    collection,
    newItems => {
      commit(mapStoreFunction(collection, 'colMutation'), newItems);
      commit('stoppedLoad', collection);
    });
}

export { collections, mapStoreFunction, mapAllBinders, setCollection };
