"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "scoredCards",
      [
        {
          scoredCorrect: false,
          sessionId: 1,
          cardId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          scoredCorrect: false,
          sessionId: 1,
          cardId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          scoredCorrect: false,
          sessionId: 1,
          cardId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          scoredCorrect: false,
          sessionId: 2,
          cardId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("scoredCards", null, {});
  },
};
