const express = require('express')
const router = express.Router()

const {registro, login, perfil, editarPerfil, mensajes,
    enviarMensaje, subirImagen, verImagenes} = require('../controllers/auth')

router.post("/register",registro)
router.post("/login",login)

router.get("/profile",perfil)
router.put("/profile",editarPerfil)

router.get("/messages",mensajes)
router.post("/messages",enviarMensaje)

router.post("/subirimagen", subirImagen)
router.get("/imagenes", verImagenes)

module.exports = router