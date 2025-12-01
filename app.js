import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocumentation from './swagger.json' assert { type: "json" };
import dbClient from './src/config/dbClient.js';
import routesUsuarios from './src/routes/usuarios.js';
import routesMascotas from './src/routes/mascotas.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

app.use('/pets', routesMascotas);
app.use('/users', routesUsuarios);

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