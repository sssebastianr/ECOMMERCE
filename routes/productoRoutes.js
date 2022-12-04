const express =  require ("express");
const router = express.Router();
const authMidd = require("../middleware/authMidd"); 
const productoController = require ("../controllers/productoController");

router.get("/", authMidd, productoController.obtenerProducto);
router.post("/", authMidd, productoController.crearProducto );
router.put("/:id", authMidd, productoController.actualizarProducto);
router.delete("/:id", authMidd, productoController.borrarProducto);

//Definir las rutas
module.exports = router;