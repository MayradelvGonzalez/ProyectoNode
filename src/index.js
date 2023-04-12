import express from 'express';
//creo mi app con express
 const app = express()
//uso el metodo de express listen para escuchar el puerto
 app.listen(3000)
 console.log('Server is listening on PORT 3000')