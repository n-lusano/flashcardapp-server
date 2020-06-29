"use strict";
module.exports = (sequelize, DataTypes) => {
  const card = sequelize.define(
    "card",
    {
      wordEn: DataTypes.STRING,
      wordNl: DataTypes.STRING,
      wordIt: DataTypes.STRING,
    },
    {}
  );
  card.associate = function (models) {
    card.belongsTo(models.user);
    card.belongsTo(models.collection);
    card.hasMany(models.scoredCard);
  };
  return card;
};
