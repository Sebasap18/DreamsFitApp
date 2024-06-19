const {DataTypes} = require('sequelize');
const sequelize = require('../../config/dbConfig/db');
const Entity = require('../core/entityModel');
const Access = sequelize.define('Access', {
    code: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    entity: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Entity,
            key: 'code',
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secret: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    schema: 'core',
    timestamps: false, // No agregar campos de fecha automáticamente (createdAt, updatedAt)
    tableName: 'access',
});
module.exports = Access;