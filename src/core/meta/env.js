function getMode () {
  return process.env.NODE_ENV;
}

function isProduction () {
  return process.env.NODE_ENV === 'production';
}

export {
  getMode,
  isProduction
};
