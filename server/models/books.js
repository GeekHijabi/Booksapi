module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }); 

  books.associate = (models) => {
    books.hasMany(models.booksItem,{
      foreignKey: 'booksId',
      as: 'booksItem',
    });
  };

  return books;
};