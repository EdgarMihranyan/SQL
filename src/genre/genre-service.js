import {
     createGenreR, getGenreR, getGenresR, getGenreByPropertyR, deleteGenreR, updateGenreR,
} from './genre-repository.js';

const getGenreByPropertyS = async (data) => {
     const got = await getGenreByPropertyR(data);
     return got;
};

export const getGenresS = async () => {
     const got = await getGenresR();

     return got;
};
export const getGenreS = async (id) => {
     const got = await getGenreR(id);

     return got;
};
export const createGenreS = async (body) => {
     const { genre } = body;
     const exist = await getGenreByPropertyS({ genre });
     if (exist?.genre === genre) throw new Error('Error but Genre exist');
     const got = await createGenreR(body);
     return got;
};
export const updateGenreS = async (id, body) => {
     const got = await updateGenreR(id, body);

     return got;
};
export const deleteGenreS = async (id) => {
     console.log(id);
     const got = await deleteGenreR(id);

     return got;
};
