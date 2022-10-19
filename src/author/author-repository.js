/* eslint-disable no-unused-vars */
import db from '../../db.js';
import Author from '../../models/Author.js';

export const getAuthorsR = async () => db.transaction(async () => {
     const result = await Author.findAll();
     return result;
});

export const getAuthorR = async (id) => db.transaction(async () => {
     const result = await Author.findOne({ where: { author_id: id } });
     return result;
});

export const createAuthorR = async (body) => db.transaction(async () => {
     const result = await Author.create(body);
     return result.toJSON();
});

export const updateAuthorR = async (id, body) => db.transaction(async () => {
     const author = await Author.findOne({ where: { author_id: id } });
     const result = await author.update({ ...body });
     console.log(result.toJSON());
     // await author.save();
     return { msg: `User ${id} updated` };
});
export const deleteAuthorR = async (id) => db.transaction(async () => {
     const result = await Author.destroy({ where: { author_id: id } });
     return { msg: `User from id ${id} deleted` };
});

export const getAuthorByPropertyR = async (data) => db.transaction(async () => {
     const result = await Author.findOne({ where: { ...data } });
     return result;
});