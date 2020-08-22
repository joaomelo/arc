import { User } from './user';
import { Resolver, Query } from 'type-graphql';

@Resolver()
class UserResolver {

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await User.find({ select: [ "id", "email", "locale" ] });
  }

}

export { UserResolver };