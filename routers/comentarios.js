const express = require("express");

const ComentarioController = require("../controllers/comentarios");

const api = express.Router();

api.post("/create-comentario", ComentarioController.createComentario);
api.get("/list-comentario", ComentarioController.listComentario);

module.exports = api;
