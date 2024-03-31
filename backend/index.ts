import express, { Request, Response } from 'express'
import cors from 'cors'
import { Server } from 'socket.io';
import { connectWs } from "./src/config/ws"
import { connect } from "./src/config/mysql"
import page from "./src/modules/page/controller/PageController"
import publicRouter from "./src/modules/public/controller/PublicController"
import { auth } from "@/auth/vertify"

const app = express()
const expressServer = app.listen(3000)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  allowedHeaders: ['Authorization', 'Content-Type'],
  charset: 'utf-8',
};

connect()
app.use(cors(corsOptions));
app.use(auth);

/* 路由 */
app.use('/page', page);
app.use('/public', publicRouter);

app.use((err, req, res: Response, next) => {
  res.status(500).send({
    code: 500,
    message: 'Internal Server Error',
    data: null
  });
});

const io = new Server(expressServer, {
  cors: {
    origin: '*'
  }
});
connectWs(io)
