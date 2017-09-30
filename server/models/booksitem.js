module.exports = (sequelize, DataTypes) => {
  const booksItem = sequelize.define('booksItem', {
    content:{type: DataTypes.STRING,
    allowNull: false,
    },

    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
  }, 

});
 booksItem.associate = (models) => {
   booksItem.belongsTo(models.Todo,{
     foreignKey: 'booksId',
     onDelete: 'cascade',
   });
 }; 
  return booksItem;
};