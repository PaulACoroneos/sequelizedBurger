module.exports = (sequelize, DataTypes) => {
  const Burgers = sequelize.define(
    'Burgers',
    {
      burgerName: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN,
    },
    {}
  );
  Burgers.associate = function(models) {
    // associations can be defined here
    console.log(models);
  };
  return Burgers;
};
