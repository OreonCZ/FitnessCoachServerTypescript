
module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "userachievements",
        {
            achievements: {
                type: Sequelize.UUID,
            },
            users: {
                type: Sequelize.UUID,
            }
        },
        {
            timestamps: true,
        }
    )
}