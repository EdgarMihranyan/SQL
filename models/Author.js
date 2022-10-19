import { DataTypes, Model } from 'sequelize';
import AuthorDetails from './Author_details.js';
import db from '../db.js';

class Author extends Model {
     get fullName() {
          return `${this.username} ${this.lastname}`;
     }
}

const model = Author.init({
     id: {
          type: DataTypes.BIGINT(20).UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
     },
     username: {
          type: DataTypes.STRING,
          allowNull: false,
     },
     lastname: {
          type: DataTypes.STRING,
          allowNull: false,
     },

}, {
     sequelize: db,
     tableName: 'authors',
});

model.hasOne(AuthorDetails, { as: 'Details', foreignKey: 'user_id' });

export default model;