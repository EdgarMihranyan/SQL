import {
     createGenreS, deleteGenreS, getGenreS, getGenresS, updateGenreS,
} from './genre-service.js';

export const getGenresC = async (req, res, next) => {
     try {
          const got = await getGenresS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getGenreC = async (req, res, next) => {
     try {
          const { id } = req.params;
          const got = await getGenreS(id);
          res.status(200).json(got || { msg: `User in id:${id} not a found` });
     } catch (err) {
          next(err);
     }
};
export const createGenreC = async (req, res, next) => {
     try {
          const { body } = req;
          const got = await createGenreS(body);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const updateGenreC = async (req, res, next) => {
     try {
          const { params, body } = req.params;
          const got = await updateGenreS(params.id, body);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteGenreC = async (req, res, next) => {
     try {
          const { id } = req.params;
          const got = await deleteGenreS(id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
