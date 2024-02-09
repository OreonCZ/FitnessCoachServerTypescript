module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "exercisecategoryrecords",
    {
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  );
};
