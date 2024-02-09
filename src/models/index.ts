import { dbConfig } from "../config/db";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
  },
});

let db = {
  Sequelize,
  sequelize,
  users: require("./user")(sequelize, Sequelize),
  accountRoles: require("./accountroles")(sequelize, Sequelize),
  userAccountRoles: require("./useraccountroles")(sequelize, Sequelize),
  friendstable: require("./friends")(sequelize, Sequelize),
  achievements: require("./achievements")(sequelize, Sequelize),
  userAchievements: require("./userachievements")(sequelize, Sequelize),
  tableStable: require("./table")(sequelize, Sequelize),
  meals: require("./meals")(sequelize, Sequelize),
  food: require("./food")(sequelize, Sequelize),
  mealsfood: require("./mealsfood")(sequelize, Sequelize),
  exercises: require("./exercises")(sequelize, Sequelize),
  exercisecategory: require("./exercisecategory")(sequelize, Sequelize),
  exercisecategoryrecords: require("./exercisecategoryrecords")(sequelize, Sequelize),
  programs: require("./programs")(sequelize, Sequelize),
  programExercises: require("./programExercises")(sequelize, Sequelize),
};

db.users.belongsToMany(db.accountRoles, {
  through: db.userAccountRoles,
  as: "userRole",
});
db.users.belongsToMany(db.users, {
  through: db.friendstable,
  as: "friends",
});
db.users.belongsToMany(db.achievements, {
  through: db.userAchievements,
  as: "achievement",
});
db.users.belongsTo(db.tableStable, {
  onDelete: "cascade",
  as: "tables",
});
db.food.belongsToMany(db.meals, {
  through: db.mealsfood,
  as: "food",
});
db.exercises.belongsToMany(db.exercisecategory, {
  through: db.exercisecategoryrecords,
  as: "exercises",
});
db.exercises.belongsToMany(db.programs, {
  through: db.programExercises,
  as: "program",
});

export default db;
