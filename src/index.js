import express from 'express';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index';

//creo mi app con express
const app = express()
//ruta absoluta, si muevo la carpeta sigo obteniendo la direccion correcta
const __dirname = dirname(fileURLToPath(import.meta.url)) 

app.set('views', join(__dirname, 'views')) //para saber donde estan las carpetas view
app.set('view engine', 'ejs') //me permite añadir logica de progr al html

//uso el metodo de express listen para escuchar el puerto
 app.listen(8080)
 console.log('Server is listening on PORT 8080')