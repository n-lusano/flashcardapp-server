"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "sessions",
      [
        {
          finished: false,
          userId: 1,
          collectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          finished: false,
          userId: 2,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sessions", null, {});
  },
};
