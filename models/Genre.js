import { DataTypes, Model } from 'sequelize';

import db from '../db.js';

class Genre extends Model {

}
const model = Genre.init({
     id: {
          type: DataTypes.BIGINT(20).UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
     },
     genre: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
     },
}, {
     sequelize: db,
     tableName: 'genres',
});

export default model;
