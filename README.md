# FlashcardApp server

Backend REST API for FlashcardApp app using Express.js and Postgres. Object-relational mapping is done using Sequelize.

## Table of contents

- [About](#about)
- [Goals](#goals)
- [Technologies](#technologies) <!-- - [Demo](#demo) -->
- [Data model](#data-model)
- [Client Repository](#client-repository)
- [Endpoints](#endpoints)

### About

This is the server repository for the FlashcardApp portfolio project: FlashcardApp is an app to provide language learners with an essential learning tool. For more details please refer to the [README](https://github.com/n-lusano/flashcardapp-client/blob/development/README.md) in the client repository.

<!-- NB THE UPDATED LINKS WITH CORRECT MASTER BRANCH! -->

### Goals

My goal for this project was to build a full stack app using the technologies learned in the bootcamp, together with what motivates me in my daily life as a language enthusiast and an expat who has been actively exercising multiple foreign languages for several years. Being a language learner myself personally motivated me in devising my own app in which collecting and rearranging all the features I was more intrigued by as a user, leaving others behind for a personally more fulfilling experience.

### Technologies

- Node.js
- Express
- REST
- Sequelize
- Postgres

### Data model

![Data model](https://github.com/n-lusano/flashcardapp-server/blob/development/DATABASE_MODEL.png?raw=true)

<!-- NB CHECK LINKS LATER -->

### Client Repository

The repository for the [frontend](https://github.com/n-lusano/flashcardapp-client) and the [user stories](https://github.com/n-lusano/flashcardapp-client/projects/1) and [wireframe](https://github.com/n-lusano/flashcardapp-client/blob/development/WIREFRAME.png) I used to plan my project.

<!-- NB CHECK LINKS LATER -->

### Endpoints

| Method | Path                                             | Purpose                                                  | required parameters                 | auth |
| ------ | ------------------------------------------------ | -------------------------------------------------------- | ----------------------------------- | ---- |
| GET    | '/'                                              | Test if your server is running                           | none                                | no   |
| POST   | '/echo'                                          | Test POST requests                                       | none                                | no   |
| POST   | '/signup'                                        | Create a new user and get a token                        | email, name, password               | no   |
| POST   | '/login'                                         | Get a token with email & password                        | email, password                     | no   |
| GET    | '/me'                                            | Get information of this user                             | none                                | yes  |
| POST   | '/authorized_post_request'                       | Test POST requests (token required)                      | none                                | yes  |
| GET    | '/user'                                          | Get logged user collections, cards, sessions, scores     | none                                | yes  |
| GET    | '/collections'                                   | Get collections and relative cards                       | none                                | no   |
| GET    | '/collections/:id'                               | Get single collection and relative cards                 | id                                  | no   |
| POST   | '/collections'                                   | Create a new collection                                  | name                                | yes  |
| PATCH  | '/collections/:id'                               | Edit a collection                                        | id, name                            | yes  |
| DELETE | '/collections/:id'                               | Delete a collection                                      | id                                  | yes  |
| GET    | '/cards'                                         | Get cards                                                | none                                | no   |
| POST   | '/cards'                                         | Create a new card                                        | wordEn, wordNl, collectionId        | yes  |
| PATCH  | '/cards/:id'                                     | Edit a card                                              | id, wordEn, wordNl                  | yes  |
| DELETE | '/cards/:id'                                     | Delete a card                                            | id                                  | yes  |
| GET    | '/sessions'                                      | Get logged user's sessions                               | none                                | yes  |
| POST   | '/sessions/collections/:collectionId'            | Start a logged user's new session                        | collectionId                        | yes  |
| PATCH  | '/sessions/collections/:collectionId'            | End a logged user's session                              | collectionId, finished              | yes  |
| GET    | '/sessions/stats/:collectionId'                  | Get logged user's sessions filtered by active collection | collectionId                        | yes  |
| GET    | '/scoredcards'                                   | Get all scored cards                                     | none                                | yes  |
| PATCH  | '/scoredcards/collections/:collectionId/:cardId' | Update logged user's score on single card                | collectionId, cardId, scoredCorrect | yes  |
