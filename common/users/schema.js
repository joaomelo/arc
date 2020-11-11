import Joi from 'joi';

const email = Joi.string().lowercase().email().required();
const password = Joi.string().min(8).max(50);

export const credentialsSchema = Joi.object({
  email,
  password: password.required()
});

export const userSchema = Joi.object({
  email,
  password,
  locale: Joi.string().valid('en', 'pt-BR').default('en')
});
