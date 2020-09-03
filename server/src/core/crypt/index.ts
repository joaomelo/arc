import { hash as hashBcryptjs, compare as compareBcryptjs } from 'bcryptjs';

async function hash(s: string): Promise<string> {
  return hashBcryptjs(s, 12);
}

async function compare(s: string, hashed: string): Promise<boolean> {
  return compareBcryptjs(s, hashed);
}

export { hash, compare };
