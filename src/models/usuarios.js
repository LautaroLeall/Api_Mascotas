import Usuario from '../schemas/usuarios.js';

class usuariosModel {

    async create(usuario) {
        return await Usuario.create(usuario);
    }

    async getAll() {
        return await Usuario.find();
    }

    async getOneById(id) {
        return await Usuario.findById(id);
    }

    async getOne(filtro) {
        return await Usuario.findOne(filtro);
    }

    async update(id, usuario) {
        return await Usuario.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, usuario, { new: true });
    }

    async delete(id) {
        return await Usuario.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }

}

export default new usuariosModel();