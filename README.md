# Puppy Love 
This is a repo containing code for an app called puppy-love in which you find dates based off pets.


## Description
Puppy love is a dating app where you can share your lovely pets photos and find your perfect match who loves pets as much as you do! This app allows you to send messages to matches, see potential matches in your area and customize a profile so you can find puppy love yourself. 


https://github.com/jerrybeau89/puppy-love


 ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Tests](#tests)
  5. [Link](#link)
  6. [Questions](#questions)

## Installation
npm install puppy-love

## Usage
Navigate to ***Some Website*** 

Navigate to the integrated terminal associated with the app. 

 Then to prepare the application to run it. 

    You can run the following commands:

  `npm i` or

  `npm install`

  Then

  `npm run start` to test backend

  or  

  `npm run develop` to run server and client

    And the application will start!

Then you can test via insomnia or some other app using get, post, put or delete routes:

    http://localhost:3001/api/ + (*** the associated query**)

  Users:

  `/api/users/`
  `/api/users/login`
  `/api/users/:id`

  Matches:

  `api/matches/:id`
  `api/matches/match/:id`
  `api/matches/field/:username`
  `api/matches/like`
  `api/matches/dislike`

  Messages:

  `/api/messages/:chatId`
  `/api/thoughts/match/messages/`

  Chats:

  `api/chats/`


Sample JSON body data is in the respective controller file.


## License


## Tests
Tests can be conducted through insomnia or some other similar application.

## Link
https://puppy-love.herokuapp.com/

## Questions

  Please contact me at jerrybeau89@gmail.com with any questions you may have. You can also find my GitHub at https://github.com/jerrybeau89. Thank you! 


​


