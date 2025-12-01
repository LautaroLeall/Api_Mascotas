import 'dotenv/config'
// import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

class dbClient {
    constructor() {
        this.connectarBaseDatos();
    }

    async connectarBaseDatos() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/adopcion?`;

        try {
            // this.client = new MongoClient(queryString);
            await mongoose.connect(queryString);
            // this.conectarBD();
            console.log('Conectado al servidor de la base de datos');
        } catch (e) {
            console.log(e);
        }
    }

    async cerrarConexion() {
        try {
            await mongoose.disconnect();
            console.log('La conexión a la base de datos se ha cerrado correctamente.');
        } catch (e) {
            console.error('Error al cerrar la conexión a la base de datos:', e);
        }
    }

    // async conectarBD() {
    //     try {
    //         await this.client.connect();
    //         this.db = this.client.db('adopcion');
    //         console.log('Conectado al servidor de la base de datos');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
}

export default new dbClient();