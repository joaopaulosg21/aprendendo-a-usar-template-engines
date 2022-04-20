import express from 'express';
import config from './config/config';
import bookRouter from './routes/bookRoutes';
import fileRouter from './routes/fileRoutes';
const app = express();
const {port} = config;

app.use(express.json({}));
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');

app.use(express.static('views'))
app.use('/book',bookRouter);
app.use(fileRouter)

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})