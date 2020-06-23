"use strict";
module.exports = (sequelize, DataTypes) => {
  const collection = sequelize.define(
    "collection",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  collection.associate = function (models) {
    collection.belongsTo(models.user);
    collection.hasMany(models.card);
  };
  return collection;
};
