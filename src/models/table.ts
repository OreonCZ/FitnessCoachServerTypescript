module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "table",
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
