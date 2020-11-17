import { createValidate } from '__com/validation';

const userSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://arc.melo.plus/user.schema.json',
  title: 'User',
  type: 'object',
  properties: {
    id: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    locale: { type: 'string' }
  },
  required: ['id', 'email']
};

export const validateUser = createValidate(userSchema);

const credentialsSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://arc.melo.plus/credentials.schema.json',
  title: 'User',
  type: 'object',
  additionalProperties: false,
  properties: {
    email: { type: 'string' },
    password: { type: 'string' }
  },
  required: ['email', 'password']
};

export const validateCredentials = createValidate(credentialsSchema);
