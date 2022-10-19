import db from '../../db.js';
import Book from '../../models/Book.js';

export const getBooksR = async () => db.transaction(async () => {
     const result = await Book.findAll();
     console.log(result.flatMap(((item) => item.toJSON())));
     return result;
});
export const getBookR = async (id) => db.transaction(async () => {
     const result = await Book.findOne({ where: { book_id: id } });
     return result.toJSON();
});

export const createBookR = async (body) => db.transaction(async () => {
     const result = await Book.create(body);
     return result.toJSON();
});
export const updateBookR = async (id, body) => db.transaction(async () => {
     const author = await Book.updateOne({ where: { book_id: id } });
     const result = await author.update({ ...body });
     console.log(result.toJSON());
     return { msg: `User ${id} updated` };
});
export const deleteBookR = async (id) => db.transaction(async () => {
     await Book.destroy({ where: { book_id: id } });
     return { msg: `User from id ${id} deleted` };
});
export const getBookByPropertyR = async (data) => db.transaction(async () => {
     const result = await Book.findOne({ where: { ...data } });
     return result;
});