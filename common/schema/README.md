# Object

The validation should be a universal semathic for client and server easly validate data realted to business entities.

# Library Choice

## Options Considered

### References

- [json-schema-benchmark](https://github.com/ebdrup/json-schema-benchmark) presented [@exodus/schemasafe](https://github.com/ExodusMovement/schemasafe) and [ajv]() as the fastest options
- [bestofjs](https://bestofjs.org/projects?tags=validation) schema serach presented the same options. but using "validation" tag gave more opptions not related to JSON schema. Been the three more relevant suitable to the case: [joi](https://bestofjs.org/projects/joi), and [Yup](https://bestofjs.org/projects/yup)

### Options

- @exodus/schemasafe
  - conforms to json-schema specs (to be studied. is it good or bad?)
  - issues 6 - stars 58 - npm 102.436 wd
- ajv
  - conforms to json-schema specs (to be studied. is it good or bad?)
  - issues 71 - stars 8.2k - npm 37.534.018 wd
- joi
  - object based. very professional looking. backed by a company.
  - issues 34 - stars 16k - npm 2.355.834 wd  
- Yup
  - based on joi. claims to focu on client side. does joi supports client side?
  - issues 106 - stars 11.4k - npm 1.678.518 wd

  By comparing they [downloads](https://www.npmtrends.com/@exodus/schemasafe-vs-ajv-vs-joi-vs-yup) AJV seems much more popular then the other tree.

  [Npm compare ](https://npmcompare.com/compare/@exodus/schemasafe,ajv,joi,yup) gives a more trhougthfull view....

## Personal Impressions of How they work

Make a funnel between the two aprroaches.

....