module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
      "programs",
      {
        programName: {
            type: Sequelize.STRING,
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