import cors from 'cors';
import express, { Response } from 'express';
import { Server } from 'socket.io';
import { auth } from './src/auth/verify';
import { connect } from './src/config/mysql';
import { connectWs } from './src/config/ws';
import publicRouter from './src/modules/public/controller/PublicController';

const app = express();
const expressServer = app.listen(3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  allowedHeaders: ['Authorization', 'Content-Type'],
  charset: 'utf-8',
};

connect();
app.use(cors(corsOptions));
app.use(auth);

app.use('/public', publicRouter);

app.use((err, req, res: Response, next) => {
  res.status(500).send({
    code: 500,
    message: 'Internal Server Error',
    data: null,
  });
});

const io = new Server(expressServer, {
  cors: {
    origin: '*',
  },
});
connectWs(io);
