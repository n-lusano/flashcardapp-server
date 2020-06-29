"use strict";
module.exports = (sequelize, DataTypes) => {
  const scoredCard = sequelize.define(
    "scoredCard",
    {
      scoredCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {}
  );
  scoredCard.associate = function (models) {
    scoredCard.belongsTo(models.session);
    scoredCard.belongsTo(models.card);
  };
  return scoredCard;
};
