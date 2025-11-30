import mascotasModel from '../models/mascotas.js';

class mascotasController {
    constructor() {

    }

    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body);

            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.update(id, req.body);

            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.delete(id);

            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            const data = await mascotasModel.getAll();

            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const data = await mascotasModel.getOne(id);

            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new mascotasController();
