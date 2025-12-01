import usuariosModel from '../models/usuarios.js';
import bcrypt from 'bcryptjs';

class usuariosController {
    constructor() {

    }

    async register (req, res) {
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

            return res.status(200).json({ message: 'Login exitoso' });
        }
        catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new usuariosController();