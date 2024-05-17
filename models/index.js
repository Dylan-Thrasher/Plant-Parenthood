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
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Collection.belongsTo(Plant, {
  foreignKey: 'plant_id',
  onDelete: 'CASCADE',
  // specifying which information carries over from Plant model
  targetKey: 'id',
  attributes: ['common_name', 'regular_url']
});

module.exports = { User, Plant, Collection };
