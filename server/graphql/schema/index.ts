import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Event {
      id: ID!
}

type User {
      _id: String!
}

type EventFull {
      id: ID!
      title: String!
      start: String!
      end: String!
      isPrivate: Boolean!
      description: String!
      createdBy: User
}

type Auth {
            userId: ID!
            username: String!
            token: String!
            tokenExpiration: Int!
        }

input UserInput {
            username: String!
            password: String!
            confirmPassword: String!
}

input LoginInput {
      username: String!
      password: String!
}

input EventInput {
        id: String!
        title: String!
        start: String!
        end: String!
        isPrivate: Boolean!
        description: String!
 }

type Query {
    events: [EventFull!]!
    login(loginInput: LoginInput!): Auth!
  }

type Mutation {
    signup(userInput: UserInput!): Auth!
    saveEvent(event: EventInput!): Event
    deleteEvent(id: ID!): Boolean!
}
        
`;
