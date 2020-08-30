import { Entity, PrimaryColumn, Generated, Column, BaseEntity, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Membership } from './membership';

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
    () => Membership, 
    membership => membership.team,
    { 
      eager: true,
      cascade: true
    }  
  )
  @Field(() => [Membership])
  memberships!: Membership[];
}

export { Team };