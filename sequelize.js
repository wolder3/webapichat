const Sequelize = require("sequelize");
const ComentariosModel = require("./models/comentarios");
const database = require("./config");

const sequelize = new Sequelize(
  `${database.DATABASE}`,
  `${database.USER}`,
  `${database.PASSWORD}`,
  {
    host: `${database.HOST}`,
    port: `${database.PORT}`,
    dialect: `${database.DIALECT}`,
    define: {
      freezeTableName: true, // Do not change my table names.
      timestamps: false, // I will do this individually, thanks.
    },
  }
);

const Comentarios = ComentariosModel(sequelize, Sequelize);

sequelize.sync();

module.exports = {
  Comentarios,
};
