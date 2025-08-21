import { Response,Request } from "express"
import { servico_buscar, servico_buscar_id, servico_delete, servico_inserir } from "./servico_comentarios"

export const control_buscar = async(req:Request,res:Response) => {
    const resultado_select = await servico_buscar()
    if(resultado_select.executado != false) {
        res.status(200).json(resultado_select)
    } else {
        res.status(500).json(resultado_select)
    }
}
export const control_buscar_id = async(req:Request,res:Response) => {
    const parametros = {
        code_comentario: req.params.code_comentario
    }
    const resultado_select_id = await servico_buscar_id(parametros)
    if(resultado_select_id.executado != false) {
        res.status(200).json(resultado_select_id)
    } else {
        res.status(500).json(resultado_select_id)
    }
}
export const control_insert = async(req:Request,res:Response) => {
    const parametros = {
        nome_usuario: req.body.nome_usuario,
        email_usuario: req.body.email_usuario,
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }
    const resultado_insert = await servico_inserir(parametros)
    if(resultado_insert.executado != false) {
        res.status(200).json(resultado_insert)
    } else {
        res.status(500).json(resultado_insert)
    }
}
export const control_delete = async(req:Request,res:Response) => {
    const parametros = {
        code_comentario: req.params.code_comentario
    }
    const resultado_delete = await servico_delete(parametros)
    if(resultado_delete.executado != false) {
        res.status(200).json(resultado_delete)
    } else {
        res.status(500).json(resultado_delete)
    }
}