import { Entity, PrimaryColumn, Generated, Column, BaseEntity, OneToMany } from 'typeorm';
import { TeamMembership } from './team-membership';

@Entity()
class Team extends BaseEntity {
  @PrimaryColumn()
  @Generated("uuid")
  id!: string;
  
  @Column()
  name!: string;
  
  @Column({ nullable: true })
  description?: string;

  @OneToMany(
    () => TeamMembership, 
    membership => membership.team,
    { 
      eager: true,
      cascade: true
    }  
  )
  memberships!: TeamMembership[];
}

export { Team };