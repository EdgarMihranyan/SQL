import {
     createAuthorS, deleteAuthorS, getAuthorS, getAuthorsS, updateAuthorS,
} from './author-service.js';

export const getAuthorsC = async (req, res, next) => {
     try {
          const got = await getAuthorsS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getAuthorC = async (req, res, next) => {
     try {
          const { id } = req.params;
          const got = await getAuthorS(id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const createAuthorC = async (req, res, next) => {
     try {
          const { body } = req.body;
          const got = await createAuthorS(body);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const updateAuthorC = async (req, res, next) => {
     try {
          const { params, body } = req.params;
          const got = await updateAuthorS(params.id, body);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteAuthorC = async (req, res, next) => {
     try {
          const { id } = req.params;
          const got = await deleteAuthorS(id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
