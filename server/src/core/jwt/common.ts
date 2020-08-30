// TODO move TO ENV FILE
const jwtSecret = 'temporarysecret';

interface TokenPayload {
  data: TokenData
}

interface TokenData {
  id: string,
  email: string
}

export { jwtSecret, TokenData, TokenPayload };