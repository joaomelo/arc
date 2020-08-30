import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { User } from './user';
import { signIn, signUp } from './sign';
import { updateEmail, updatePassword } from './update';

@InputType()
class SignInput implements Partial<User> {
  @Field()
  @IsEmail()
  email!: string;
  
  @Field()
  password!: string;
}

@InputType()
class UpdateEmailInput {
  @Field()
  @IsEmail()
  newEmail!: string;
  
  @Field()
  password!: string;
}

@InputType()
class UpdatePasswordInput {
  @Field()
  newPassword!: string;
  
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

  @Mutation(() => String)
  async updateEmail(@Arg("input") input: UpdateEmailInput): Promise<string> {
    const token = await updateEmail('userId', input.newEmail, input.password);
    return token;
  }

  @Mutation(() => String)
  async updatePassword(@Arg("input") input: UpdatePasswordInput): Promise<string> {
    const token = await updatePassword('userId', input.newPassword, input.password);
    return token;
  }

}

export { UserResolver };