const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Assuming you have a sequelize connection

class Plant extends Model {}

Plant.init({
    common_name: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    scientific_name: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: false
    },
    other_name: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: true
    },
    cycle: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    watering: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    sunlight: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: false
    },
    license: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    license_name: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    license_url: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    original_url: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    regular_url: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    medium_url: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    small_url: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
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
