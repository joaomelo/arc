import { object, string, refine, size, assert } from 'superstruct';
import validator from 'email-validator';

export function validateCredentials (credentials) {
  assert(credentials, credentialsSchema);
}

const emailSchema = refine(string(), 'email', value => validator.validate(value));
const passwordSchema = size(string(), 8, 20);
const credentialsSchema = object({
  email: emailSchema,
  password: passwordSchema
});
