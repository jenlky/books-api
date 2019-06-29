const Sequelize = require("sequelize");

const sequelize = new Sequelize("books-api", "postgres", "H0wtesting", {
  dialect: "postgres"
});

const models = {
  Book: sequelize.import("./book"),
  Author: sequelize.import("./author")
};

// call association method in each model
Object.keys(models).forEach(key => {
  console.log(models);
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { sequelize, ...models };