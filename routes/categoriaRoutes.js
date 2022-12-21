const express =  require ("express");
const authMidd = require("../middleware/authMidd");
const router = express.Router();
const categoriaController = require ("../controllers/categoriaController");

router.get("/", categoriaController.obtenerCategoriaHome);
router.get("/", authMidd,categoriaController.obtenerCategoria);
router.get("/:id", authMidd,categoriaController.obtenerCategoriaId);
router.post("/", authMidd,categoriaController.crearCategoria);
router.put("/:id", authMidd,categoriaController.actualizarCategoria);
router.delete("/:id", authMidd,categoriaController.borrarCategoria);

//Definir las rutas
module.exports = router;
