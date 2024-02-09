module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "exercises",
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
      },
      videoPath: {
        type: Sequelize.STRING,
      },
      exerciseDesc: {
        type: Sequelize.TEXT,
      },
      smallDesc: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
};
