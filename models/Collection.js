const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model { }

Collection.init({
  owned: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  plant_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  common_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  regular_url: {
    type: DataTypes.STRING,
    allowNull: true
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
