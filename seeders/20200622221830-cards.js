"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "cards",
      [
        {
          wordEn: "Red",
          wordNl: "Rood",
          wordIt: "Rosso",
          userId: 1,
          collectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Green",
          wordNl: "Groen",
          wordIt: "Verde",
          userId: 1,
          collectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Black",
          wordNl: "Zwart",
          wordIt: "Nero",
          userId: 1,
          collectionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "One",
          wordNl: "Één",
          wordIt: "Uno",
          userId: 1,
          collectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Two",
          wordNl: "Twee",
          wordIt: "Due",
          userId: 1,
          collectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Three",
          wordNl: "Drie",
          wordIt: "Tre",
          userId: 1,
          collectionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Apple",
          wordNl: "Appel",
          wordIt: "Mela",
          userId: 2,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Potato",
          wordNl: "Aardappel",
          wordIt: "Patata",
          userId: 2,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Strawberry",
          wordNl: "Aardbei",
          wordIt: "Fragola",
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
    return queryInterface.bulkDelete("cards", null, {});
  },
};
