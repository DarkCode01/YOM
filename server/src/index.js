const express = require('express'),
    morgan = require('morgan'),
    cors = require('cors'),
    router = require('./routes/routes'),
    port = 1234,
    app = express();

app //Referencia al objeto express, solo instanciar a partir de aqui las demas funciones en cadena.
    .use(cors()) //middleware para evitar errores de cors en produccion

    .use(morgan('dev')) //middleware para seguir el rastro de las peticiones HTTP por consola

    .use('/', router) //Creacion de las rutas externas

    .listen(port, () => {
        console.log('Running on port:', port);
    });