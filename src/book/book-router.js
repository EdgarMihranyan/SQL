import { Router } from 'express';
import {
     getBooksC, getBookC, deleteBookC, updateBookC, createBookC,
} from './book-controller.js';

const bookRouter = Router();

bookRouter.get('/', getBooksC);
bookRouter.get('/:id', getBookC);
bookRouter.post('/', createBookC);
bookRouter.patch('/:id', updateBookC);
bookRouter.delete('/:id', deleteBookC);

export default bookRouter;
