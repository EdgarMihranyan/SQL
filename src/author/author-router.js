import { Router } from 'express';
import {
     getAuthorsC, getAuthorC, deleteAuthorC, updateAuthorC, createAuthorC,
} from './author-controller.js';

const authorRouter = Router();

authorRouter.get('/', getAuthorsC);
authorRouter.get('/:id', getAuthorC);
authorRouter.post('/', createAuthorC);
authorRouter.patch('/:id', updateAuthorC);
authorRouter.delete('/:id', deleteAuthorC);

export default authorRouter;
