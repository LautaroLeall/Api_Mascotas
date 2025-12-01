import express from 'express';
import mascotasController from '../controllers/mascotas.js';
import { verificarToken } from '../helpers/autenticacion.js';

const route = express.Router();

// req = request
// Datos entrantes
// res = response
// Datos que queremos enviar al cliente

// GET /pets
route.get('/', mascotasController.getAll);

// GET /pets/:id
route.get('/:id', mascotasController.getOne);

// POST /pets
route.post('/', mascotasController.create);

// PUT /pets/:id
route.put('/:id', verificarToken, mascotasController.update);

// DELETE /pets/:id
route.delete('/:id', verificarToken, mascotasController.delete);

// POST /pets/adoptar/:id
route.post('/:mascotaId/adoptar', verificarToken, mascotasController.adoptar);

export default route;