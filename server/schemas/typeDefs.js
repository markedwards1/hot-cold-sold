const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type User {
    _id: ID!
    username: String!
    email: String!
    clients: [Client]!
  }

  type Client {
    _id: ID
    name: String
    phone: String
    email: String
    product: String
    note: String
    createdAt: String
    status: String
    communication: [Communication]
  }

  type Communication {
    _id: ID
    type: String
    text: String
    createAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    findUser(username: String!): User
    clients: [Client]
    findClient(id: ID!): Client
    me: User
   
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addClient( name: String, phone: String, email: String, product: String, note: String, createAt: String, status: String ): Client

    addCommunication(clientId: ID, type: String text: String, createAt: String): Client

    updateUser(userId: ID!, username: String!): User

    updateClient(clientId: ID, name: String, phone: String, email: String, product: String, note: String, createAt: String, status: String ): Client

    updateCommunication(communicationId: ID, type: String text: String, createAt: String): Client

    removeUser(userId: ID!): User

    removeClient(clientId: ID): Client
  }
`;

module.exports = typeDefs;
