const express =  require ("express");
const router = express.Router();
const usuarioController = require ("../controllers/usuariosController");

/*
router.get("/", (req, res) => {
    res.json({msg: "desde router get json"});
});

router.post("/", (req, res) => {
    res.json({msg:"desde router post json postman"});
});

router.put("/", (req, res) => {
    res.json({msg:"desde router put json postman"});
});

router.delete("/", (req, res) => {
    res.json({msg:"desde router delete json postman"});
});
*/

router.post(
    "/",
    usuarioController.crearUsuario
)

module.exports = router;