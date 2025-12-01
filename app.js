import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

import dbClient from './src/config/dbClient.js';
import routesUsuarios from './src/routes/usuarios.js';
import routesMascotas from './src/routes/mascotas.js';

// Cargar Swagger JSON manualmente
const swaggerDocumentation = JSON.parse(
    fs.readFileSync('./swagger.json', 'utf8')
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// para ver la documentación de la API
// localhost:5100/doc 
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

app.use('/pets', routesMascotas);
app.use('/users', routesUsuarios);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
        console.log(`Servidor activo en http://localhost:${PORT}`)
    );
} catch (e) {
    console.error(e);
}

process.on('SIGINT', async () => {
    dbClient.cerrarConexion();
    process.exit(0);
});
