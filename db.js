import Sequelize from 'sequelize';
import { createNamespace } from 'cls-hooked';
import 'dotenv/config';

export const namespace = createNamespace('ns');
Sequelize.useCLS(namespace);

const {
     DB_DATABASE, DB_LOGIN, DB_PASSWORD, DB_LOG, DB_TYPE,
} = process.env;

const db = new Sequelize(DB_DATABASE, DB_LOGIN, DB_PASSWORD, {
     dialect: DB_TYPE,
     logging: DB_LOG ? console.log : false,
     timezone: '+00:00',
     define: {
          freezeTableName: true,
          timestamps: false,
     },
});

export function openConnection() {
     console.info('Connected');
     return db.authenticate();
}

export function closeConnection() {
     return db.close();
}

export default db;