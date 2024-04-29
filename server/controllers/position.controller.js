const Position = require('../models/position.model');
const sequelize = require('../configs/connect.config').sequelize;
class PrefixController {
    async index(req, res) {
        Position.findAll({
            attributes: ['id', 'position_name', 'position_status', 'created_at', 'updated_at'],
            raw: true
        }).then(response => {
            res.json({
                status: 'success',
                data: response
            });
        });
    }

    async store(req, res) {
        const t = await sequelize.transaction();
        try {
            const response = await Position.create(req.body, {
                transaction: t
            });
            await t.commit();
            res.json({
                status: 'success',
                data: response
            });
        } catch (error) {
            await t.rollback();
            res.json({
                status: 'error',
                message: error.message
            });
        }
    }

    async edit(req, res) {
        const id = req.params.id;
        Position.findByPk(id).then(response => {
            res.json({
                status: 'success',
                data: response
            });
        });
    }

    async update(req, res) {
        const t = await sequelize.transaction();
        try {
            const id = req.body.id;
            const response = await Position.findByPk(id);
            await Position.update(req.body, { transaction: t });
            await t.commit();
            res.json({
                status: 'response',
                data: position
            });
        } catch (error) {
            await t.rollback();
            res.json({
                status: 'error',
                message: error.message
            });
        }
    }

    async destroy(req, res) {
        const t = await sequelize.transaction();
        try {
            const id = req.params.id;
            const response = await Position.findByPk(id);
            await Position.destroy({ transaction: t });
            await t.commit();
            res.json({
                status: 'success',
                data: response
            });
        } catch (error) {
            await t.rollback();
            res.json({
                status: 'error',
                message: error.message
            });
        }
    }
}

module.exports = new PrefixController();