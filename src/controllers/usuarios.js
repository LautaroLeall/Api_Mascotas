import { generarToken } from '../helpers/autenticacion.js';
import usuariosModel from '../models/usuarios.js';
import bcrypt from 'bcryptjs';
// import jsonwebtoken from 'jsonwebtoken';

class usuariosController {
    constructor() {
    }

    async register(req, res) {
        try {
            const { nombre, email, telefono, password } = req.body;
            const usuarioExiste = await usuariosModel.getOne({ email });

            if (usuarioExiste) {
                return res.status(409).json({ error: 'El usuario ya existe' });
            }

            const passwordHash = await bcrypt.hash(password, 10);
            const data = await usuariosModel.create({
                nombre,
                email,
                telefono,
                password: passwordHash
            });

            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const usuarioExiste = await usuariosModel.getOne({ email });

            if (!usuarioExiste) {
                return res.status(409).json({ error: 'El usuario no existe' });
            }

            const passwordMatch = await bcrypt.compare(password, usuarioExiste.password)
            if (!passwordMatch) {
                return res.status(409).json({ error: 'La contraseña no es correcta' });
            }
            const token = generarToken(email);

            return res.status(200).json({ message: 'Login exitoso', token });
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async profile(req, res) {
        try {
            console.log(req.emailConectado);

            const data = await usuariosModel.getOne({ email: req.emailConectado });

            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async misMascotas(req, res) {
        try {
            const { id } = req.params;
            const usuarioExiste = await usuariosModel.getOneById(id);

            if (!usuarioExiste) {
                return res.status(409).json({ error: 'El usuario no existe' });
            }

            const data = await usuariosModel.getMisMascotas(id);

            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new usuariosController();