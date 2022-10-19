import express from 'express';
import { commandShowEmailC } from './slash-controller.js';

const slashComRouter = express.Router();

slashComRouter.post('/', commandShowEmailC);

export default slashComRouter;