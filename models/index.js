const User = require('./User');
const Plant = require('./Plant');
const Collection = require('./Collection')


User.hasMany(Plant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Plant.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Collection, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Collection.belongsTo(User, {
  foreignKey: 'user_id'
});

Collection.hasMany(Plant, {
  foreignKey: 'plant_id',
  onDelete: 'CASCADE'
});

Plant.belongsTo(Collection, {
  foreignKey: 'plant_id'
});

module.exports = { User, Plant, Collection };
