function getMode () {
  return process.env.NODE_ENV;
}

function isProduction () {
  return process.env.NODE_ENV === 'production';
}

function getPort () {
  return process.env.PORT || 3001;
}

function getAddress () {
  return `${process.env.PROTOCOL}://${process.env.URL}:${getPort()}`;
}

export {
  getMode,
  isProduction,
  getPort,
  getAddress
};
