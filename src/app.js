import express from 'express';
import morgan from 'morgan';
import authorRouter from './author/author-router.js';
import bookRouter from './book/book-router.js';
import genreRouter from './genre/genre-router.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('./book', bookRouter);
app.use('./author', authorRouter);
app.use('./genre', genreRouter);

export default app;
