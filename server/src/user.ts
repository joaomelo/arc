@ObjectType()
class User {
  @Field(type => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  locale: string;
}

export { User };