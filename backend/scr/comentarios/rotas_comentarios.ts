import express from "express";
import { control_buscar, control_buscar_id, control_delete, control_insert } from "./controlador_comentarios";

const rota_comentario = express.Router()
rota_comentario.post("/",control_insert)
rota_comentario.get("/",control_buscar)
rota_comentario.get("/:code_comentario",control_buscar_id)
rota_comentario.delete(":code_comentario",control_delete)
export = rota_comentario