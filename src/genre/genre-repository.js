import db from '../../db.js';
import Genre from '../../models/Genre.js';

export const getGenresR = async () => db.transaction(async () => {
     const result = await Genre.findAll();
     console.log(result.flatMap(((item) => item.toJSON())));
     return result;
});
export const getGenreR = async (id) => db.transaction(async () => {
     const result = await Genre.findOne({ where: { genre_id: id } });
     return result;
});

export const createGenreR = async (body) => db.transaction(async () => {
     console.log(body);
     const result = await Genre.create(body);
     return result.toJSON();
});
export const updateGenreR = async (id, body) => db.transaction(async () => {
     const author = await Genre.updateOne({ where: { genre_id: id } });
     const result = await author.update({ ...body });
     console.log(result.toJSON());
     return { msg: `User ${id} updated` };
});
export const deleteGenreR = async (id) => db.transaction(async () => {
     await Genre.destroy({ where: { genre_id: id } });
     return { msg: `User from id ${id} deleted` };
});
export const getGenreByPropertyR = async (data) => db.transaction(async () => {
     const result = await Genre.findOne({ where: { ...data } });
     return result;
});