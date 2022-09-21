import http from 'http';
import Sequelize from 'sequelize';
import 'dotenv/config';
import app from './src/app.js';

const {
     DB_DATABASE, DB_LOGIN, DB_PASSWORD, DB_HOST, DB_LOG, DB_PORT, DB_TYPE,
} = process.env;

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

Author.sync({ force: true }).then(async () => {
     const author = await Author.create({
          username: 'Joanne',
          lastname: 'Rowling',
          age: 57,
          genre: 'Fantasy',
          book: 'Harry Potter',
     });
     console.log(author.toJSON(), '\n\nAuthor added to database');
}).catch((err) => {
     console.log(err, 'Author not added to database');
});
