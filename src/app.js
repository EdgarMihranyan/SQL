/* eslint-disable no-unused-vars */

import express, { urlencoded } from 'express';
import morgan from 'morgan';
import authorRouter from './author/author-router.js';
import bookRouter from './book/book-router.js';
import genreRouter from './genre/genre-router.js';
import { openConnection, closeConnection } from '../db.js';
import { runMigrations } from '../migration.js';
import slashComRouter from './slack-bot/slash-commands/slash-router.js';
import { commandShowEmailC } from './slack-bot/slash-commands/slash-controller.js';
import sendMessageToChannel from './slack-bot/webhooks/webhooks.js';

const app = express();

const expressMiddleware = async () => {
     app.use(urlencoded({ extended: true }));
     app.use(express.json());
     app.use(morgan('dev'));
};

const routing = async () => {
     app.post('/showmyemail', commandShowEmailC);
     app.use('/book', bookRouter);
     app.use('/author', authorRouter);
     app.use('/genre', genreRouter);
};

const errorHandling = async () => {
     app.use(async (err, req, res, next) => {
          console.log(err);
          await sendMessageToChannel(`:no_entry: ${err.message} :no_entry:`);
          res.status(404).json({ msg: err.message });
     });
};
(async () => {
     try {
          await openConnection();
          await runMigrations();
          await closeConnection();
          await expressMiddleware();
          await routing();
          await errorHandling();
     } catch (err) {
          console.log(err);
     }
})();

export default app;