module.exports = (sequelize, DataTypes) => {
  const Burgers = sequelize.define(
    'Burgers',
    {
      burgerName: DataTypes.STRING,
    },
    {}
  );
  Burgers.associate = function(models) {
    // associations can be defined here
    console.log(models);
  };
  return Burgers;
};
