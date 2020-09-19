import { hash as hashBcryptjs, compare as compareBcryptjs } from 'bcryptjs';

async function hash (s) {
  return hashBcryptjs(s, 12);
}

async function compare (s, hashed) {
  return compareBcryptjs(s, hashed);
}

export { hash, compare };
