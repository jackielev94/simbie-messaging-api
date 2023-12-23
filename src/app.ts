import express from 'express';
import { rootRouter } from './routes';
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", rootRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
