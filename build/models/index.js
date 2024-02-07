"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(db_1.dbConfig.DB, db_1.dbConfig.USER, db_1.dbConfig.PASSWORD, {
    host: db_1.dbConfig.HOST,
    port: db_1.dbConfig.PORT,
    dialect: db_1.dbConfig.dialect,
    pool: {
        acquire: db_1.dbConfig.pool.acquire,
        idle: db_1.dbConfig.pool.idle,
        max: db_1.dbConfig.pool.max,
        min: db_1.dbConfig.pool.min,
    },
});
let db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize,
    users: require("./user")(sequelize, sequelize_1.Sequelize),
};
db.Sequelize = sequelize_1.Sequelize;
db.sequelize = sequelize;
db.users = require("./user")(sequelize, sequelize_1.Sequelize);
exports.default = db;
