import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login(
    $email: String!, 
    $password: String!
    ) {
      login(
        email: $email,
        password: $password
      ) {
        token
        user {
          _id
        }
    }
  }
`;

export const SIGNUP = gql`
  mutation signUp($username: String!, $email: String!,$password: String!)
   {
      signUp(
        username: $username, 
        email: $email, 
        password: $password
        ) {
          token
          user {
            _id
          }
      }
  }
`;

// export const UPDATEUSER = gql`
//   mutation updateUser($user: [ID]!){
//     updateUser(
//       user: $user,
//       body: UpdateUserInput
//     ) {
//       token
//       user{
//         _id
//       }
//     }
//   }
// `;


