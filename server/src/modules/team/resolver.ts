import { Resolver, Query, Ctx } from 'type-graphql';
import { Context } from '../../core/graphql';
import { Team } from './team';

@Resolver()
class TeamResolver {

  @Query(() => [Team], { nullable: true })
  async myTeams(@Ctx() ctx: Context): Promise<Team[] | null> {
    if (!ctx.userId) return null;

    const userId = ctx.userId;
    const myTeams = await Team
      .createQueryBuilder("team")
      .innerJoinAndSelect("team.memberships", "membership", "membership.userId = :userId", { userId })
      .getMany();

    return myTeams;
  }

}

export { TeamResolver };