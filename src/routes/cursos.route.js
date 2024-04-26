const { Router, query } = require("express"); //
const Curso = require("../models/Curso");

const { auth } = require("../middleware/auth");
const CursoControler = require("../controllers/CursoControler");

const cursoRoutes = new Router();

cursoRoutes.post("/", auth, CursoControler.cadastrar);
cursoRoutes.get("/", auth, CursoControler.listar);
cursoRoutes.delete("/:id", auth, CursoControler.deletar);
cursoRoutes.put("/:id", auth, CursoControler.alterar);

module.exports = cursoRoutes;
