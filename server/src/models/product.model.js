const { Schema, model, SchemaTypes } = require('mongoose');

const ProductSchema = new Schema(
    {
        idArt: String,
        nomArt: String,
        descripcion: String,
        images: [{
            type: SchemaTypes.ObjectId,
            ref: 'Image',
            validateExistance: true
        }],
        precio: Number,
        ctg: String,
    },
    { versionKey: false }
);


module.exports = model('Product', ProductSchema);