const express = require ("express");
const conectarDB = require("./config/db");
const usuarioRoutes = require("./routes/usuarioRoutes");
const auth = require ("./routes/auth");
const categoriaRoutes = require ("./routes/categoriaRoutes");
const productoRoutes = require ("./routes/productoRoutes");
const categoria =  require("./models/categoria");
const cors = require("cors");

const app = express ();
app.use(express.json({extended:true}));

//rutas

conectarDB();

app.use(cors());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", auth);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/producto", productoRoutes);

app.listen (4000, () =>{
    console.log("servidor corriendo en el puerto 4000 G12");
});