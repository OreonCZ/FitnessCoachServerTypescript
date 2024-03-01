module.exports = (sequelize: any, Sequelize: any) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, //neco jako auto_increment
        primaryKey: true,
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stats: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
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
