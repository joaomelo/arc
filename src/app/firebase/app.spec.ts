import { initFirebaseAppFromEnv } from './app'

describe('firebase app module', () => {
  test('basic app initialization does no break', () => {
    const app = initFirebaseAppFromEnv()
    const sameApp = initFirebaseAppFromEnv()

    expect(app).toEqual(sameApp)
  })
})
