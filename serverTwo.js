import Sequelize from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize('shop-api', process.env.DB_LOGIN, process.env.DB_PASSWORD, {
     dialect: 'mysql',
     host: 'localhost',
     define: {
          freezeTableName: true,
          timestamps: false,
     },
});

sequelize.authenticate().then(() => {
     console.log('Connecting successfully');
}).catch(() => {
     console.log('Error database connecting');
});

const Products = sequelize.define('Products', {
     id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
     },
     name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
     },
});

sequelize.sync({ force: true }).then(async () => {
     const products = await Products.create({
          name: 'God Of War 4',
     });
     console.log(products, 'added');
}).catch((err) => {
     console.log(err);
});
