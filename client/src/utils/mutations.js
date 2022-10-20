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