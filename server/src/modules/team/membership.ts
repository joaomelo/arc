import { Entity, PrimaryColumn, Generated, Column, BaseEntity, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from '__ser/modules/user';
import { Team } from './team';

enum Role {
  Owner = 0,
  Editor,
  Member
}

@Entity()
@ObjectType()
class Membership extends BaseEntity {
  @PrimaryColumn()
  @Generated("uuid")  
  @Field(() => ID)
  id!: string;

  @ManyToOne(
    () => Team, 
    team => team.memberships,
  )
  @Field(() => Team)
  team!: Team;

  @ManyToOne(() => User, { eager: true })
  @Field(() => User)
  user!: User;

  @Column()
  @Field()
  role!: Role;
}

export { Membership, Role };