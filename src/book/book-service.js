import { getBookR, getBooksR } from './book-repository.js';

export const getBooksS = async () => {
     const got = await getBooksR();

     return got;
};
export const getBookS = async (id) => {
     const got = await getBookR(id);

     return got;
};
export const createBookS = async (body) => {
     const got = await getBookR(body);

     return got;
};
export const updateBookS = async (id, body) => {
     const got = await getBookR(id, body);

     return got;
};
export const deleteBookS = async (id) => {
     const got = await getBookR(id);

     return got;
};
