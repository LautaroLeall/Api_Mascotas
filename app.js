import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import dbClient from './src/config/dbClient.js';
import routesMascotas from './src/routes/mascotas.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/mascotas', routesMascotas);

try {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Servidor activo en el puerto http://localhost:${PORT}`));
} catch (e) {
    console.error(e);
}

process.on('SIGINT', async () => {
    dbClient.cerrarConexion();
    process.exit(0);
});