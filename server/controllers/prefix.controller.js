const Prefix = require('../models/prefix.model');
const sequelize = require('../configs/connect.config').sequelize;
class PrefixController {
    async index(req, res) {
        Prefix.findAll({
            attributes: ['id', 'prefix_name', 'prefix_status', 'created_at', 'updated_at'],
            raw: true
        }).then(prefix => {
            res.json({
                status: 'success',
                data: prefix
            });
        });
    }

    async store(req, res) {
        const t = await sequelize.transaction();
        try {
            const prefix = await Prefix.create(req.body, {
                transaction: t
            });
            await t.commit();
            res.json({
                status: 'success',
                data: prefix
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
        Prefix.findByPk(id).then(prefix => {
            res.json({
                status: 'success',
                data: prefix
            });
        });
    }

    async update(req, res) {
        const t = await sequelize.transaction();
        try {
            const id = req.body.id;
            const prefix = await Prefix.findByPk(id);
            await prefix.update(req.body, { transaction: t });
            await t.commit();
            res.json({
                status: 'success',
                data: prefix
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
            const prefix = await Prefix.findByPk(id);
            await prefix.destroy({ transaction: t });
            await t.commit();
            res.json({
                status: 'success',
                data: prefix
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