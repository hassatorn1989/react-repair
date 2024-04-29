const sequelize = require('sequelize');
const db = require('../configs/connect.config');

const department = db.sequelize.define('department', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    department_name: {
        type: sequelize.STRING
    },
    department_status: {
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
    tableName: 'department'
});

module.exports = department;