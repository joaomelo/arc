import { Entity, PrimaryColumn, Generated, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn()
  @Generated("uuid")
  id!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column()
  locale!: string;

  @Column()
  password!: string;
}

export { User };