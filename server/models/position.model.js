const sequelize = require('sequelize');
const db = require('../configs/connect.config');

const position = db.sequelize.define('position', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    position_name: {
        type: sequelize.STRING
    },
    position_status: {
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
    tableName: 'position'
});

module.exports = position;