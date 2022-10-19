import {
     createBookR, deleteBookR, getBookByPropertyR, getBookR, getBooksR, updateBookR,
} from './book-repository.js';

const getBookByPropertyS = async (data) => {
     const got = await getBookByPropertyR(data);
     return got;
};
export const getBooksS = async () => {
     const got = await getBooksR();

     return got;
};
export const getBookS = async (id) => {
     const got = await getBookR(id);

     return got;
};
export const createBookS = async (body) => {
     const { bookName } = body;
     console.log(bookName);
     const [exist] = await getBookByPropertyS({ bookName }) || [null];
     console.log(exist);
     if (exist?.bookName === bookName) throw new Error('Error but Book exist');
     const got = await createBookR(body);

     return got;
};
export const updateBookS = async (id, body) => {
     const got = await updateBookR(id, body);

     return got;
};
export const deleteBookS = async (id) => {
     const got = await deleteBookR(id);

     return got;
};
