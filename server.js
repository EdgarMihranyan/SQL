import http from 'http';
import Sequelize, { Op } from 'sequelize';

import { createNamespace } from 'cls-hooked';
import 'dotenv/config';
import app from './src/app.js';

const {
     DB_DATABASE, DB_LOGIN, DB_PASSWORD, DB_HOST, DB_LOG, DB_PORT, DB_TYPE,
} = process.env;

const namespace = createNamespace('my_namespace');
Sequelize.useCLS(namespace);

const port = DB_PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
     console.log(`Example app listening on port ${port}!`);
});

const sequelize = new Sequelize(DB_DATABASE, DB_LOGIN, DB_PASSWORD, {
     host: DB_HOST,
     dialect: DB_TYPE,
     logging: DB_LOG ? console.log : false,
     define: {
          freezeTableName: true,
          timestamps: true,
     },
});
(async () => {
     try {
          await sequelize.authenticate();
          console.log('Connection successful!');
     } catch (err) {
          console.log(err);
     }
})();

const Author = sequelize.define('author', {
     user_id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
     },
     username: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
     },
     lastname: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
     },
     age: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 21,
     },
     genre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,

     },
     book: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
     },

});

Author.sync({ alter: true }).then(async () => {
     try {
          await sequelize.transaction(async (t) => {
               const result = await Author.create({
                    username: 'Edgar',
                    lastname: 'Lincoln',
                    age: 60,
                    genre: 'Fantasy',
                    book: 'The Book Of Elia',
               }, { transaction: t });
               return result;
          });
          const authors = await Author.findAll({
               where: {
                    [Op.or]: [{
                         user_id: 1,
                    },
                    { user_id: 20 },
                    ],
               },
          });

          console.log(JSON.parse(JSON.stringify(authors)));
     } catch (error) {
          console.log(error, 'Author not added to database');
     }
});
