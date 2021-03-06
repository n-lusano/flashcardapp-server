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
          wordNl: "De appel",
          wordIt: "La mela",
          userId: 2,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Potato",
          wordNl: "De aardappel",
          wordIt: "La patata",
          userId: 2,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Strawberry",
          wordNl: "De aardbei",
          wordIt: "La fragola",
          userId: 2,
          collectionId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Hello",
          wordNl: "Hallo",
          wordIt: "Ciao",
          userId: 1,
          collectionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Good morning",
          wordNl: "Goedemorgen",
          wordIt: "Buongiorno",
          userId: 1,
          collectionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Welcome",
          wordNl: "Welkom",
          wordIt: "Benvenuto",
          userId: 1,
          collectionId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Italy",
          wordNl: "Italië",
          wordIt: "Italia",
          userId: 2,
          collectionId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "The Netherlands",
          wordNl: "Nederland",
          wordIt: "Paesi Bassi",
          userId: 2,
          collectionId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Great Britain",
          wordNl: "Groot-Brittannië",
          wordIt: "Gran Bretagna",
          userId: 2,
          collectionId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Cat",
          wordNl: "De kat",
          wordIt: "Il gatto",
          userId: 2,
          collectionId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Dog",
          wordNl: "De hond",
          wordIt: "Il cane",
          userId: 2,
          collectionId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Rabbit",
          wordNl: "Het konijn",
          wordIt: "Il coniglio",
          userId: 2,
          collectionId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "January",
          wordNl: "Januari",
          wordIt: "Gennaio",
          userId: 3,
          collectionId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "February",
          wordNl: "Februari",
          wordIt: "Febbraio",
          userId: 3,
          collectionId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "March",
          wordNl: "Maart",
          wordIt: "Marzo",
          userId: 3,
          collectionId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Dutch",
          wordNl: "Het Nederlands",
          wordIt: "L'olandese",
          userId: 3,
          collectionId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "English",
          wordNl: "Het Engels",
          wordIt: "L'inglese",
          userId: 3,
          collectionId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Korean",
          wordNl: "Het Koreaans",
          wordIt: "Il coreano",
          userId: 3,
          collectionId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Rain",
          wordNl: "De regen",
          wordIt: "La pioggia",
          userId: 3,
          collectionId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Sun",
          wordNl: "De zon",
          wordIt: "Il sole",
          userId: 3,
          collectionId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Cloud",
          wordNl: "De wolk",
          wordIt: "La nuvola",
          userId: 3,
          collectionId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Happy",
          wordNl: "Blij",
          wordIt: "Felice",
          userId: 3,
          collectionId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Easy",
          wordNl: "Makkelijk",
          wordIt: "Facile",
          userId: 3,
          collectionId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordEn: "Difficult",
          wordNl: "Moeilijk",
          wordIt: "Difficile",
          userId: 3,
          collectionId: 10,
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
