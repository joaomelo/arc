import { Resolver, Query, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { Context } from '__ser/core/graphql';
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

  @Mutation(() => String, { nullable: true })
  async updateEmail(@Arg("input") input: UpdateEmailInput, @Ctx() ctx: Context): Promise<string | null> {
    if (!ctx.userId) return null;
    const userId = ctx.userId;
    
    const token = await updateEmail(userId, input.newEmail, input.password);
    return token;
  }

  @Mutation(() => String, { nullable: true })
  async updatePassword(@Arg("input") input: UpdatePasswordInput, @Ctx() ctx: Context): Promise<string | null> {
    if (!ctx.userId) return null;
    const userId = ctx.userId;
    
    const token = await updatePassword(userId, input.newPassword, input.password);
    return token;
  }

}

export { UserResolver };