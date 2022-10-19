import { DataTypes, Model } from 'sequelize';

import db from '../db.js';

class Book extends Model {

}
const model = Book.init({
     id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
     },
     author_id: {
          type: DataTypes.INTEGER,
          allowNull: false,

     },
     bookName: {
          type: DataTypes.STRING,
          allowNull: false,
          // unique: true,
     },
     releaseDate: {
          type: DataTypes.INTEGER,
          allowNull: false,
     },
     language: {
          type: DataTypes.STRING,
          defaultValue: 'ENG',
     },

}, {
     sequelize: db,
     tableName: 'books',
});

export default model;
