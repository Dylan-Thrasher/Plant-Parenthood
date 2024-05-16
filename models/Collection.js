const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Assuming you have a sequelize connection

class Collection extends Model {}

Collection.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    owned: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    //links the user data table with a foreign key
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      plant_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'plant',
          key: 'id',
        },
      },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'collection',
  }
);

module.exports = Collection;
