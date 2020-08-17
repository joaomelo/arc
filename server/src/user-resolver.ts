import { User } from './user';

@Resolver()
class UserResolver {
  private usersCollection: User[] = [];

  async users(): Promise<User[]> {    
    return await this.users;
  }
}

export { UserResolver };