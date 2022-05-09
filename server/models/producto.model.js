const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String



},{
    versionKey:false, timestamps: true,
});//timestamp estamos creando el created_at y updated_at y el versionkey false solo nos elimina el atributo automatico -v

const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;