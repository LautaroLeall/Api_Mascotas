import mongoose from 'mongoose';

const mascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        // unique: true
    },
    tipo: {
        type: String,
        required: true,
        enum: ['perro', 'Perro', 'gato', 'Gato', 'otro', 'Otro']
    },
    raza: {
        type: String,
        // required: true,
        default: 'no especificada'
    },
    edad: {
        type: Number,
        // required: true,
        min: [0, 'Edad no puede ser negativa'],
        max: [30, 'La Edad no parece correcta']
    },
    descripcion: {
        type: String,
        // required: true
    },
    adoptado: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('mascotas', mascotaSchema);