import express from 'express';
import usuariosController from '../controllers/usuarios.js';
import { verificarToken } from '../helpers/autenticacion.js';

const route = express.Router();

// req = request
// Datos entrantes
// res = response
// Datos que queremos enviar al cliente

// POST /register
route.post('/register', usuariosController.register);

// POST /login
route.post('/login', usuariosController.login);

// GET /profile
route.get('/profile',verificarToken, usuariosController.profile);

export default route;