"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4, //neco jako auto_increment
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        passwordHash: {
            type: Sequelize.STRING,
            allowNull: false
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
        }
    }, {
        timestamps: true,
    });
};
