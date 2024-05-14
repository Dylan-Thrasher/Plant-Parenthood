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
    default_image_license: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    default_image_license_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    default_image_license_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    default_image_original_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    default_image_regular_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    default_image_medium_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    default_image_small_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    default_image_thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
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
