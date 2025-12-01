import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 45
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 35
    },
    telefono: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        default: "Sin telefono",
        minlength: 5,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 20
    },
    // rol: {
    //     type: String,
    //     required: true,
    //     enum: ['admin', 'usuario']
    // }
});

export default mongoose.model('usuarios', usuarioSchema);