module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "food",
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
        },
        {
            timestamps: true,
        }
    )
}