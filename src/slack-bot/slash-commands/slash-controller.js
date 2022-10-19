import { commandShowEmailS } from './slash-service.js';

export const commandShowEmailC = async (req, res, next) => {
     try {
          console.log(req.body);
          const got = await commandShowEmailS(req.body);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};