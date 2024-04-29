const sequelize = require('sequelize');
const db = require('../configs/connect.config');

const Prefix = db.sequelize.define('prefix', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prefix_name: {
        type: sequelize.STRING
    },
    prefix_status: {
        type: sequelize.ENUM('active', 'inactive')
    },
    createdAt: {
        type: sequelize.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: sequelize.DATE,
        field: 'updated_at'
    }
}, {
    tableName: 'prefix'
});

module.exports = Prefix;