const { Schema, model } = require('mongoose'),

articuloSchema = new Schema({
    idArt: String, // identificador del articulo
    nomArt: String, // nombre de articulo
    descripcion: String,
    imgURL: String,
    precio: Number, 
    ctg: String, // Categoria
})

usuarioSchema = new Schema({
    idUsr: String, // Identificador de usuario
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

