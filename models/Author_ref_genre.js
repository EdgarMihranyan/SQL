import { DataTypes, Model } from 'sequelize';

import db from '../db.js';

class AuthorRefGenre extends Model {

}

const model = AuthorRefGenre.init({
     author_id: {
          type: DataTypes.BIGINT(20).UNSIGNED,
          primaryKey: true,
     },
     genre_id: {
          type: DataTypes.BIGINT(20).UNSIGNED,
          primaryKey: true,
     },
}, {
     sequelize: db,
     tableName: 'authors_ref_genres',
});

export default model;