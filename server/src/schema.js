const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    locale: String!
  }

  type Team {
    id: ID!
    name: String!
    owner: User!
    editors: [User!]
    members: [User!]
  }

  input TeamInput {
    name: String!
    ownerId: String!
    editorsIds: [String!]
    membersIds: [String!]
  }

  type updateTeamResponse {
    success: Boolean!
    message: String
    team: Team
  }

  type Query {
    currentUser: User
    users: [User!]!
    myteams (userId: ID!): [Team!]!    
  }

  type Mutation {
    signUp(email: String): String
    login(email: String): String
    addTeam(team: TeamInput): updateTeamResponse
    updateTeam(teamId: ID!, team: TeamInput): updateTeamResponse
    delTeam(teamId: ID!): updateTeamResponse
  }
`;

module.exports = typeDefs;
