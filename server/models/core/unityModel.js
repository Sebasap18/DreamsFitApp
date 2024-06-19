const {DataTypes} = require('sequelize');
const sequelize = require('../../config/dbConfig/db');
const Category = require('../core/categoryModel');
const Unity = sequelize.define('Unity', {
    // Definición de los campos de la tabla 'unity'
    code: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    initials: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'code',
        },

    }
    // Otros campos...
}, {
    // Opciones adicionales del modelo (opcional)
    schema: 'core',
    timestamps: false, // No agregar campos de fecha automáticamente (createdAt, updatedAt)
    tableName: 'unity', // Nombre real de la tabla en la base de datos
});

module.exports = Unity;