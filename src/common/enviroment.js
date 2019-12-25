export function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function appMode () {
  let result;

  if (process.env.NODE_ENV === 'development' && process.env.FIREBASE_MODE === 'emulator') {
    // development mode using firebase emulator
    result = 'dev_em';
  };
  if (process.env.NODE_ENV === 'development' && process.env.FIREBASE_MODE === 'cloud') {
    // development mode using a cloud firebase project
    result = 'dev_cl';
  };
  if (process.env.NODE_ENV === 'production') {
    result = 'prod';
  };

  return result;
}
