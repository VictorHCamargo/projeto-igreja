import express from 'express';
import { Response,Request } from 'express';
import rota_comentario from './scr/comentarios/rotas_comentarios';
import cors from "cors";

const app = express();
const port = process.env.API_PORT || 3000;

//Configurações do Servidor
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "*",
    credentials: true
}))

app.get("/", (req:Request,res:Response)=> {
    res.json({'status': 'ok'})
})

app.use("/victor",rota_comentario)

app.listen(port, () => {
    console.log(`Servidor está rodando graças a Deus na porta ${port}!!!`)
})