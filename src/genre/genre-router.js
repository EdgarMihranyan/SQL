import { Router } from 'express';
import {
     getGenresC, getGenreC, deleteGenreC, updateGenreC, createGenreC,
} from './genre-controller.js';

const genreRouter = Router();

genreRouter.get('/', getGenresC);
genreRouter.get('/:id', getGenreC);
genreRouter.post('/', createGenreC);
genreRouter.patch('/:id', updateGenreC);
genreRouter.delete('/:id', deleteGenreC);

export default genreRouter;
