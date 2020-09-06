import { Resolver, Query, Ctx } from 'type-graphql';
import { Context } from '__ser/core/graphql';
import { Arc } from './arc';

@Resolver()
class ArcResolver {

  @Query(() => [Arc], { nullable: true })
  async myArcs(@Ctx() ctx: Context): Promise<Arc[] | null> {
    if (!ctx.userId) return null;

    const userId = ctx.userId;
    const myArcs = await Arc
      .createQueryBuilder("arc")
      .innerJoinAndSelect("arc.memberships", "membership", "membership.userId = :userId", { userId })
      .getMany();

    return myArcs;
  }

}

export { ArcResolver };