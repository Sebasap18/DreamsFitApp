const {DataTypes} = require('sequelize');
const sequelize = require('../../config/dbConfig/db');
const GymLocation = require('../core/gymLocationModel');
const Entity = sequelize.define('Entity', {
        code: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gymLocation: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: GymLocation,
                key:'code'
            }
        },
        identification: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        schema: 'core',
        timestamps: false, // No agregar campos de fecha automáticamente (createdAt, updatedAt)
        tableName: 'entity',
    });
module.exports = Entity;