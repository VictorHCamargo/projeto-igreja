import express from 'express';
import { Response,Request } from 'express';

const app = express();
const port = process.env.API_PORT || 3000;

//Configurações do Servidor
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req:Request,res:Response)=> {
    res.json({'status': 'ok'})
})
app.listen(port, () => {
    console.log(`Servidor está rodando graças a Deus na porta ${port}!!!`)
})