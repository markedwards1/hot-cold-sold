import { gql } from '@apollo/client';

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
  }
}
`;


