module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "exercisecategory",
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
};
