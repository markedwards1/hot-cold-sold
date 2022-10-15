const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type User {
    _id: ID!
    username: String!
    email: String!
    clients: [Client]
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
    contacts: [Contact]
  }

  type Contact {
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
    user(username: String!): User
    clients(name: String, phone: String, email: String, product: String, status: String): [Client]
    finduser(id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addClient(name: String, phone: String, email: String, product: String, note: String, createAt: String, status: String): Client,

    addContact(type: String text: String, createAt: String): Contact
    updateClient(name: String, phone: String, email: String, product: String, note: String): Client
    updateContact(type: String, text: String, createAt: String): Contact
    removeClient(clientId: ID!): Client
    removeContact(contactId: ID!): Client
  }
`;

module.exports = typeDefs;
