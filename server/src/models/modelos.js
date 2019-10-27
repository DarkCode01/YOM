const { Schema, model } = require('mongoose'),

    articuloSchema = new Schema({
        nomArt: String, // nombre de articulo
        descripcion: String,
        imgURL: String,
        precio: Number,
        fecSub: String, // Deberia explicar porque la fecha de subida?
        lugVen: String, // lugar de venta en donde se encuentra el articulo
        cnd: String, // Condicion del articulo
        ctg: String, // Categoria
        scn: String, // Seccion
    }),

    usuarioSchema = new Schema({
        nom: String, // Nombre del usuario
        apll: String, // Apellido
        email: String,
        fchCreacion: String, // fecha de creacion de la cuenta
        acceso: {
            nivel: Number,
            grupo: String
        }
    })

module.exports = {
    usuario: model("Usuario", usuarioSchema),
    articulo: model("Articulo", articuloSchema)
};

