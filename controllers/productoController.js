const categoria = require("../models/categoria");
const Producto = require ("../models/producto");

exports.obtenerProductoHome = async (req, res) => {
    try{
        const producto = await Producto.find();
        res.json({producto});
    }catch(error){
        console.log(error);
    }

};

exports.crearProducto = async ( req, res) => {
    try{
        const producto = new Producto(req.body);
        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    }
};

exports.obtenerProducto = async (req, res) => {
    const {id} = req.params
    const producto = await Producto.find().where("categoriaId").equals(id);
    res.json(producto);

};

exports.actualizarProducto = async (req, res) => {
    const{id} = req.params;
    const producto = await Producto.findById(id);
    if(!producto){
        return res.status(400).json({msg: "Producto no encontrado"});        
    }
    if(producto.creado.toString() !==req.usuario.id.toString()){
        return res.status
    }``

    
}

exports.borrarProducto = async (req, res) => {
    try{
        await Producto.deleteOne({_id: req.params.id});
        res.json({msg: "Producto eliminado"});
    }catch(error){
        console.log(error);

    }
    
}