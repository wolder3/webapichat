module.exports = (sequelize, type) => {
  return sequelize.define("Comentarios", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: type.STRING(30),
    idade: type.INTEGER,
    comentario: type.STRING(100),
  });
};
