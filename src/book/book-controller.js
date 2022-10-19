import {
     createBookS, deleteBookS, getBookS, getBooksS, updateBookS,
} from './book-service.js';

export const getBooksC = async (req, res, next) => {
     try {
          const got = await getBooksS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getBookC = async (req, res, next) => {
     try {
          const { id } = req.params;
          const got = await getBookS(id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const createBookC = async (req, res, next) => {
     try {
          const { body } = req;
          const got = await createBookS(body);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const updateBookC = async (req, res, next) => {
     try {
          const { params, body } = req.params;
          const got = await updateBookS(params.id, body);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteBookC = async (req, res, next) => {
     try {
          const { id } = req.params;
          const got = await deleteBookS(id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
