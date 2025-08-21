import { resultado_all } from "./resultado_comentarios";

export const servico_buscar = async() => {
    const sql = "SELECT * FROM tb_comentarios";
    const resultado_select = await resultado_all(sql)
    return resultado_select
}
export const servico_buscar_id = async(parametros:any) => {
    const sql = "SELECT * FROM tb_comentarios WHERE code_comentario=$1";
    const parametro = [parametros.code_comentario]
    const resultado_select = await resultado_all(sql,parametro)
    return resultado_select
}
export const servico_inserir = async(parametros:any) => {
    const sql = "INSERT INTO tb_comentarios (nome_usuario,email_usuario,titulo,descricao) VALUES ($1,$2,$3,$4) RETURNING code_comentario"
    const parametro = [parametros.nome_usuario,parametros.email_usuario,parametros.titulo,parametros.descricao]
    const resultado_insert = await resultado_all(sql,parametro)
    return resultado_insert
}
export const servico_delete = async(parametros:any) => {
    const sql = "DELETE FROM tb_comentarios WHERE code_comentario=$1"
    const parametro = [parametros.code_comentario]
    const resultado_delete = await resultado_all(sql,parametro)
    return resultado_delete
}