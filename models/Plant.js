const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Assuming you have a sequelize connection

class Plant extends Model {}

Plant.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    common_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scientific_name: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    other_name: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    cycle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    watering: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sunlight: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    license: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    license_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    license_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    original_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    regular_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    medium_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    small_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant',
  }
);

module.exports = Plant;
