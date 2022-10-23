import { gql } from "@apollo/client";

export const ALL_CLIENT = gql`
  query allClient {
    clients {
      _id
      email
      name
      note
      phone
      product
      status
      createdAt
    }
  }
`;

export const USER = gql`
  query findUser($username: String!) {
    findUser(username: $username) {
      _id
      username
      email
      clients {
        _id
        name
      }
    }
  }
`;

export const OPEN_CLIENT = gql`
  query findClient($findClientId: ID!) {
    findClient(id: $findClientId) {
      _id
      name
      phone
      email
      product
      note
      createdAt
      status
      communication {
        _id
        type
        text
        createAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      clients {
        _id
        name
        phone
        email
        product
        note
        createdAt
        status
      }
    }
  }
`;
