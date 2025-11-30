import 'dotenv/config'
import express from 'express';
import routesMascotas from './src/routes/mascotas.js';

const app = express();

app.use(express.json());

app.use('/mascotas', routesMascotas);

try {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Servidor activo en el puerto http://localhost:${PORT}`));
} catch (e) {
    console.error('Error al iniciar el servidor:', e);
}