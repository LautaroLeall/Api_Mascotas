import express from 'express';
import usuariosController from '../controllers/usuarios.js';

const route = express.Router();

// req = request
// Datos entrantes
// res = response
// Datos que queremos enviar al cliente

// GET /mascotas
// route.get('/', mascotasController.getAll);

// GET /mascotas/:id
// route.get('/:id', mascotasController.getOne);

// POST /register
route.post('/register', usuariosController.register);

// POST /login
route.post('/login', usuariosController.login);

// PUT /mascotas/:id
// route.put('/:id', mascotasController.update);

// DELETE /mascotas/:id
// route.delete('/:id', mascotasController.delete);

export default route;