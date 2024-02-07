
module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "achievements",
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true
            },
            progress: {
                type: Sequelize.TINYINT,
                allowNull: false,
            },
            done: {
                type: Sequelize.BOOLEAN,
                defaultValue: 0,
            },
            image: {
                type: Sequelize.BLOB,
            }
        },
        {
            timestamps: true,
        }
    )
}