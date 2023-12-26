import express from 'express';
import { rootRouter } from './routes';
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", rootRouter);

export const server = app.listen(port, () => {});
