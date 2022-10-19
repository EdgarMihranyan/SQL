import http from 'http';
import 'dotenv/config';
import app from './src/app.js';

const port = process.env.DB_PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
     console.log(`Example app listening on port ${port}!`);
});