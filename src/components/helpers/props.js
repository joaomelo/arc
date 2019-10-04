function createPropType (type, value) {
  const result = { type: type };

  if (value === undefined) {
    result.required = true;
  } else {
    result.default = value;
  }

  return result;
}

export { createPropType as p };
