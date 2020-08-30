import { Resolver, Query, Ctx } from 'type-graphql';
import { Context } from '../../core/graphql';
import { Team } from './team';

@Resolver()
class TeamResolver {

  @Query(() => [Team])
  async myTeams(@Ctx() ctx: Context): Promise<Team[]> {
    console.log(ctx);
    
    return await Team.find();
  }

}

export { TeamResolver };