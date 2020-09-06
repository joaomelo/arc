import { Entity, PrimaryColumn, Generated, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from '__ser/modules/users';

@Entity()
@ObjectType()
class Arc extends BaseEntity {
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
    membership => membership.arc,
    { 
      eager: true,
      cascade: true
    }  
  )
  @Field(() => [Membership])
  memberships!: Membership[];
}

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
    () => Arc, 
    arc => arc.memberships,
  )
  @Field(() => Arc)
  arc!: Arc;

  @ManyToOne(() => User)
  @Field(() => User)
  user!: User;

  @Column()
  @Field()
  role!: Role;
}

export { Arc, Membership, Role };