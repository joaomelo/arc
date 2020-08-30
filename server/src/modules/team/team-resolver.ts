import { Team } from './team';
import { Resolver, Query } from 'type-graphql';

@Resolver()
class TeamResolver {

  @Query(() => [Team])
  async myTeams(): Promise<Team[]> {
    return await Team.find();
  }

}

export { TeamResolver };