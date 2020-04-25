const { Comentarios } = require("../sequelize");

function createComentario(req, res) {
  const { nome, idade, comentario } = req.body;

  return Comentarios.create({
    nome: nome,
    idade: idade,
    comentario: comentario,
  })
    .then(() => res.status(200).send({ message: "Successfull." }))
    .catch((error) => res.status(500).send({ message: "Erro", error: error }));
}

function listComentario(req, res) {
  return Comentarios.findAll()
    .then((comentarios) => res.status(200).send(comentarios))
    .catch((error) => res.status(500).send({ message: "Erro", error: error }));
}
module.exports = {
  createComentario,
  listComentario,
};
