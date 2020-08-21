import { hash } from 'bcryptjs';
import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';
import { IsEmail, Min } from 'class-validator';
import { User } from './user';

@InputType()
class RegisterInput {
  @Field()
  @IsEmail()
  email!: string;
  
  @Field()
  @Min(8)
  password!: string;
  
  @Field()
  locale!: string;
}

@Resolver()
class RegisterResolver {
  @Query(() => String)
  users(): string {    
    return "Hello world";
  }

  @Mutation(() => User)
  async register(
    @Arg('input') { email, locale, password }: RegisterInput
  ): Promise<User> {    
    const hashedPassword = await hash(password, 12);

    const user = User.create({
      email,
      password: hashedPassword,
      locale
    });
    await user.save();

    return user;
  }
}

export { RegisterResolver };