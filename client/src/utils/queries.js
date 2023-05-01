import { gql } from '@apollo/client';

export const QUERY_USER = gql `
  {
    user{
      name
      username
      email
      pic
      dob
      phoneNumber
      gender
      pet
      likes
      dislikes
      matches
      potentialMatches
    }
  }
`;

export const QUERY_CHAT = gql`
 query getChats($user: ID){
  chats(user: $user){
      chat{
        _id
        users
        latestMessage
      }
    }
  }
`;

export const QUERY_MESSAGES =gql`
   query getMessages($chat: ID){
    messages(chat: $chat){
      messages{
        _id
        content
        chat
        readBy
      } 
    }
  }
`;

