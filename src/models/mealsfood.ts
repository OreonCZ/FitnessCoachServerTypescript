module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "mealsfood",
        {
            foodId: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            mealId: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
        },
        {
            timestamps: true,
        }
    )
}