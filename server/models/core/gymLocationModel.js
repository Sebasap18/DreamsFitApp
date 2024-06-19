const {DataTypes} = require('sequelize');
const sequelize = require('../../config/dbConfig/db');
const GymLocation = sequelize.define('GymLocation', {
        code: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        schema: 'core',
        timestamps: false, // No agregar campos de fecha automáticamente (createdAt, updatedAt)
        tableName: 'gym_location',
    });
module.exports = GymLocation;