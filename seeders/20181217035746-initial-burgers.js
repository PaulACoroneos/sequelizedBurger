module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Burgers',
      [
        {
          burgerName: 'Texas',
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
};
