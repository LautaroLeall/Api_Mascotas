import 'dotenv/config';
import jsonwebtoken from 'jsonwebtoken';

export function generarToken(email) {
    return jsonwebtoken.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export function verificarToken(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'No se ha proporcionado un token' });
    }

    try {
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        console.log(dataToken.email);
        req.emailConectado = dataToken.email;
        // req.usuario = dataToken;
        next();
    } catch (e) {
        res.status(401).json({ error: 'Token inválido' });
    }
}
