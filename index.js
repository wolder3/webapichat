const Sequelize = require("sequelize");
const app = require("./app");
const port = process.env.Port || 3878;
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
app.listen(port, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
