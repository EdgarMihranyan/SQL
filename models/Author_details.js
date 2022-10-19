import { DataTypes, Model } from 'sequelize';

import db from '../db.js';

class AuthorDetails extends Model {

}

const model = AuthorDetails.init({
     author_id: {
          type: DataTypes.BIGINT(20).UNSIGNED,
          primaryKey: true,
          unique: true,
     },
     born: {
          type: DataTypes.STRING,
          allowNull: false,
     },
     education: {
          type: DataTypes.STRING,
          allowNull: false,
     },
     salary: {
          type: DataTypes.INTEGER,
          allowNull: false,
     },

}, {
     sequelize: db,
     tableName: 'authors_details',
});

// Author.sync({ alter: true });
// Author.hasOne(Book, { as: 'book', foreignKey: 'bookId' });
// Book.hasOne(Author, { as: 'author', foreignKey: 'authorId' });

export default model;