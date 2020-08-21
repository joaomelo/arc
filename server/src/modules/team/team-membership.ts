import { Entity, PrimaryColumn, Generated, Column, BaseEntity, ManyToOne } from 'typeorm';
import { User } from '../user';
import { Team } from './team';

enum Role {
  Owner = 0,
  Editor,
  Member
}

@Entity()
class TeamMembership extends BaseEntity {
  @PrimaryColumn()
  @Generated("uuid")  
  id!: string;

  @ManyToOne(
    () => Team, 
    team => team.memberships,
  )
  team!: Team;

  @ManyToOne(() => User)
  user!: User;

  @Column()
  role!: Role;
}

export { TeamMembership, Role };