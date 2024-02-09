module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "accountroles",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
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
