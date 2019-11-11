// src/schema.js

const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        clubs: [Club!]!
      }

    type Club {
        id: Int!
        title: String!
        ingredients: String!
        direction: String!
        user: User!
    }

    type Query {

        user(id: Int!): User
        
        club(id: Int!): Club

        allClubs: [Club!]!

    }

    type Mutation {

        createUser(name: String!, email: String!, password: String!): User!

        createClub(
          userId: Int!
          title: String!
          details: String!
          location: String!
        ): Club!
    }
`

module.exports = typeDefs;