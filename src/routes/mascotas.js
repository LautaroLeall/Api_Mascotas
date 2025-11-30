import express from 'express';
import mascotasController from '../controllers/mascotas.js';

const route = express.Router();

// req = request
// Datos entrantes
// res = response
// Datos que queremos enviar al cliente

// GET /mascotas
route.get('/', mascotasController.getAll);

// GET /mascotas/:id
route.get('/:id', mascotasController.getOne);

// POST /mascotas
route.post('/', mascotasController.create);

// PUT /mascotas/:id
route.put('/:id', mascotasController.update);

// DELETE /mascotas/:id
route.delete('/:id', mascotasController.delete);

export default route;