function createPropType (type, value) {
  const result = { type };

  if (value === undefined) {
    result.required = true;
  } else {
    if (value === null) {
      result.default = null;
    } else if (Array.isArray(value) && value.length === 0) {
      result.default = () => [];
    } else if (typeof value === 'object' && Object.entries(value).length === 0) {
      result.default = () => {};
    } else {
      result.default = value;
    }
  }

  return result;
}

export { createPropType as p };
