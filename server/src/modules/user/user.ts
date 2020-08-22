import { Entity, PrimaryColumn, Generated, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

enum Locale {
  en = "en",
  ptBr = "pt_BR"
}

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
  locale!: Locale;

  @Column()
  password!: string;
}

export { User, Locale };