import { Team } from './team';
import { Resolver, Query } from 'type-graphql';

@Resolver()
class TeamResolver {

  @Query(() => [Team])
  async teams(): Promise<Team[]> {
    return await Team.find();
  }

}

export { TeamResolver };