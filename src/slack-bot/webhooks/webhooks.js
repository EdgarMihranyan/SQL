import axios from 'axios';
import 'dotenv/config';

const url = process.env.WEBHOOK_URL;

const sendMessageToChannel = async (text) => {
     await axios.post(url, { text });
};

export default sendMessageToChannel;