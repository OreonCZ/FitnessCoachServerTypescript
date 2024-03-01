module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "tableStable",
    {
      tableText: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
};
