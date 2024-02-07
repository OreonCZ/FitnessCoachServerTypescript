module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "meals",
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
            name: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
        },
        {
            timestamps: true,
        }
    )
}