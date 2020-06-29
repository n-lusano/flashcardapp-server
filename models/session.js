"use strict";
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define(
    "session",
    {
      finished: {
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );
  session.associate = function (models) {
    session.belongsTo(models.user);
    session.belongsTo(models.collection);
    session.hasMany(models.scoredCard);
  };
  return session;
};
