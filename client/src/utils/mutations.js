import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`

mutation addClient($name: String, $phone: String, $addClientEmail2: String, $product: String, $note: String, $createAt: String, $status: String){
  addClient(name: $name, phone: $phone, email: $addClientEmail2, product: $product, note: $note, createAt: $createAt, status: $status) {
    createdAt
    email
    name
    note
    phone
    product
    
  }
}



  # mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
  #   addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
  #     _id
  #     thoughtText
  #     thoughtAuthor
  #     createdAt
  #     comments {
  #       _id
  #       commentText
  #     }
  #   }
  # }
`;

export const LOGIN_USER = gql`

mutation Login($loginEmail: String!, $loginPassword: String!) {
  login(email: $loginEmail, password: $loginPassword) {
    token
    user {
      _id
      username
      email
      
    }
  }
}

  # mutation login($email: String!, $password: String!) {
  #   login(email: $email, password: $password) {
  #     token
  #     user {
  #       _id
  #       username
  #     }
  #   }
  # }
`;