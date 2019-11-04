const express = require('express'),
    morgan = require('morgan'),
    cors = require('cors'),
    router = require('./routes/routes'),
    bodyParser= require('body-parser'),
    port = process.env.PORT || 1234,
    shell=require('shelljs'),
    app = express(),
     path = require('path');
global.Root = path.resolve(__dirname);

require('./db');

app //Referencia al objeto express, solo instanciar a partir de aqui las demas funciones en cadena.
    .use(cors()) //middleware para evitar errores de cors en produccion
    
    
    .use('/storage',express.static(path.resolve('storage')))

    .use(bodyParser.urlencoded({extended:true})) //para validacion de formularios en formato app/x-www-form-urlencoded

    .use(bodyParser.json()) //para validacion de formularios en formato app/JSON
    
    .use(morgan('dev')) //middleware para seguir el rastro de las peticiones HTTP por consola

    .use('/', router) //Creacion de las rutas externas

    .listen(port, (err) => {
        if (err) {
            throw err
        }
        
        console.log('Running on port:', port);
    });

let dir = './storage/images';
shell.mkdir('-p', dir);
//creando la ruta y el directorio para almacenar las imagenes

