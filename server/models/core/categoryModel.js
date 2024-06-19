const {DataTypes} = require('sequelize');
const sequelize = require('../../config/dbConfig/db');
const Category = sequelize.define('Category', {
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
        instant: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Valor por defecto a la fecha y hora actual
            timezone: true, // Especificar que el campo es timestamptz (timestamp with time zone)
        },
    },
    {
        // Opciones adicionales del modelo (opcional)
        schema: 'core',
        timestamps: false, // No agregar campos de fecha automáticamente (createdAt, updatedAt)
        tableName: 'category', // Nombre real de la tabla en la base de datos
    }
);
module.exports = Category;