"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("collections", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("cards", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("cards", "collectionId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "collections",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("sessions", "collectionId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "collections",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("sessions", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("scoredCards", "sessionId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "sessions",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("scoredCards", "cardId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "cards",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("collections", "userId");
    await queryInterface.removeColumn("cards", "userId");
    await queryInterface.removeColumn("cards", "collectionId");
    await queryInterface.removeColumn("sessions", "collectionId");
    await queryInterface.removeColumn("sessions", "userId");
    await queryInterface.removeColumn("scoredCards", "sessionId");
    await queryInterface.removeColumn("scoredCards", "cardId");
  },
};
