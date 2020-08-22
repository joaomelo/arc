import { Entity, PrimaryColumn, Generated, Column, BaseEntity, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { TeamMembership } from './team-membership';

@Entity()
@ObjectType()
class Team extends BaseEntity {
  @PrimaryColumn()
  @Generated("uuid")
  @Field(() => ID)
  id!: string;
  
  @Column()
  @Field()
  name!: string;
  
  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @OneToMany(
    () => TeamMembership, 
    membership => membership.team,
    { 
      eager: true,
      cascade: true
    }  
  )
  @Field(() => [TeamMembership])
  memberships!: TeamMembership[];
}

export { Team };