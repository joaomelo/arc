import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { User } from './user';
import { signIn, signUp } from './sign-services';

@InputType()
class SignInput implements Partial<User> {
  @Field()
  @IsEmail()
  email!: string;
  
  @Field()
  password!: string;
}

@Resolver()
class UserResolver {

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await User.find({ select: [ "id", "email", "locale" ] });
  }

  @Mutation(() => String)
  async signUp(@Arg("input") input: SignInput): Promise<string> {
    const token = await signUp(input.email, input.password);
    return token;
  }

  @Mutation(() => String)
  async signIn(@Arg("input") input: SignInput): Promise<string> {
    const token = await signIn(input.email, input.password);
    return token;
  }

}

export { UserResolver };