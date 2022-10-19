import sendMessageToChannel from '../slack-bot/webhooks/webhooks.js';
import {
     createAuthorR, getAuthorR, getAuthorsR, getAuthorByPropertyR, deleteAuthorR, updateAuthorR,
} from './author-repository.js';

const getAuthorByPropertyS = async (data) => {
     const got = await getAuthorByPropertyR(data);
     return got;
};

export const getAuthorsS = async () => {
     const got = await getAuthorsR();

     return got;
};
export const getAuthorS = async (id) => {
     const got = await getAuthorR(id);
     const data = Object.entries(got.toJSON());
     data.shift();
     await sendMessageToChannel(`Data by Author id ${id} \`\n ${data
          .join('  :white_check_mark: \n')
          .replaceAll(',', ' :arrow_right: ')}  :white_check_mark:`);

     return got;
};
export const createAuthorS = async (body) => {
     const { username, lastname } = body;
     const exist = await getAuthorByPropertyS({ username, lastname });
     if (exist?.username === username && exist?.lastname === lastname) throw new Error('Error but Author exist');
     const got = await createAuthorR(body);

     await sendMessageToChannel(`Author ${username} ${lastname} added to database :books:`);

     return got;
};
export const updateAuthorS = async (id, body) => {
     const got = await updateAuthorR(id, body);

     await sendMessageToChannel(`Author whit id\` ${id}  updated :hammer_and_wrench:`);

     return got;
};
export const deleteAuthorS = async (id) => {
     console.log(id);
     const got = await deleteAuthorR(id);

     await sendMessageToChannel(`Author whit id\` ${id}  deleted :x:`);

     return got;
};
