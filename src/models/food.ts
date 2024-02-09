module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "food",
    {
      mealName: {
        type: Sequelize.STRING,
      },
      tableText: {
        type: Sequelize.STRING,
      },
      cal: {
        type: Sequelize.SMALLINT,
      },
      carb: {
        type: Sequelize.FLOAT,
      },
      fat: {
        type: Sequelize.FLOAT,
      },
      proteins: {
        type: Sequelize.FLOAT,
      },
      sugar: {
        type: Sequelize.FLOAT,
      },
      salt: {
        type: Sequelize.FLOAT,
      },
      weight: {
        type: Sequelize.FLOAT,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
