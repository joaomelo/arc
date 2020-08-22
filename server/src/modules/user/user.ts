import { Entity, PrimaryColumn, Generated, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
class User extends BaseEntity {
  @PrimaryColumn()
  @Generated("uuid")
  @Field(() => ID)
  id!: string;

  @Column({ unique: true })
  @Field()
  email!: string;

  @Column()
  @Field()
  locale!: string;

  @Column()
  password!: string;
}

export { User };