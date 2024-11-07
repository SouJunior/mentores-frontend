export class UserAlreadyLoggedIn extends Error {
  constructor() {
    super('User already logged in.');
  }
}
