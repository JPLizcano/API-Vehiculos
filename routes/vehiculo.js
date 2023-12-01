const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { vehiculoGet, vehiculoPost, vehiculoPut, vehiculoDelete } = require('../controllers/vehiculo')

route.get('/', vehiculoGet)

route.post('/', vehiculoPost)

route.put('/', vehiculoPut)

route.delete('/', vehiculoDelete)

module.exports = route