import { getAuthorR, getAuthorsR } from './author-repository.js';

export const getAuthorsS = async () => {
     const got = await getAuthorsR();

     return got;
};
export const getAuthorS = async (id) => {
     const got = await getAuthorR(id);

     return got;
};
export const createAuthorS = async (body) => {
     const got = await getAuthorR(body);

     return got;
};
export const updateAuthorS = async (id, body) => {
     const got = await getAuthorR(id, body);

     return got;
};
export const deleteAuthorS = async (id) => {
     const got = await getAuthorR(id);

     return got;
};
