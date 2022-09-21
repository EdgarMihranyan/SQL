import { getGenreR, getGenresR } from './genre-repository.js';

export const getGenresS = async () => {
     const got = await getGenresR();

     return got;
};
export const getGenreS = async (id) => {
     const got = await getGenreR(id);

     return got;
};
export const createGenreS = async (body) => {
     const got = await getGenreR(body);

     return got;
};
export const updateGenreS = async (id, body) => {
     const got = await getGenreR(id, body);

     return got;
};
export const deleteGenreS = async (id) => {
     const got = await getGenreR(id);

     return got;
};
