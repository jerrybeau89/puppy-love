import { gql } from '@apollo/client';

export const GET_MATCH_FIELD = gql`
  query GetMatchField($id: ID!) {
    getMatchField(id: $id) {
      username
      name
      gender
      pet
    }
  }
`;
