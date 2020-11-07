import { validator } from '@exodus/schemasafe';

const schema = {
  type: 'object',
  required: ['id', 'name'],
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  }
};

export const validate = validator(schema);
