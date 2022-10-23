import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`

mutation addClient($name: String, $phone: String, $email: String, $product: String, $note: String, $createAt: String, $status: String){
  addClient(name: $name, phone: $phone, email: $email, product: $product, note: $note, createAt: $createAt, status: $status) {
    _id
    name
    phone
  }
}
`;

export const LOGIN_USER = gql`

mutation HCSMutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const ADD_COMMUNICATION = gql`
mutation AddCommunication($clientId: ID!, $type: String, $text: String, $addCommunicationCreateAt2: String) {
  addCommunication(clientId: $clientId, type: $type, text: $text, createAt: $addCommunicationCreateAt2) {
    _id
    name
    phone
    communication {
      _id
      type
      text
      createAt
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
      _id
    }
  }
}
`;

export const UPDATE_CLIENT = gql`
mutation updateClient($clientId: ID, $name: String, $phone: String, $email: String, $product: String, $note: String, $createAt: String, $status: String){
  updateClient(clientId: $clientId, name: $name, phone: $phone, email: $email, product: $product, note: $note, createAt: $createAt, status: $status) {
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

`;

export const DELETE_CLIENT = gql`
mutation removeClient($clientId: ID){
  removeClient(clientId: $clientId) {
    _id
    name
    phone
    email
  }
}


`