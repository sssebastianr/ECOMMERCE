const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre: {type: String, required : true, trim: true},
    descripcion: {type: String, required: true, trim: true},
    stock:{type: Number, required: true, trim: true},
    precio: {type: Number, required: true, trim: true},
    imagen: {type: String, required : true, trim: true},
    creado: {type: Date, default: Date.now()},
    productoId: {type: mongoose.Schema.Types.ObjectId, ref: "Producto"},
})

module.exports = mongoose.model("Producto", productoSchema);