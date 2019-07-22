import express, { json } from 'express';
import cors from 'cors';
import { v1 } from './routes/v1';

const app = express();

app.use(cors());
app.use(json());
app.use('/', express.static(`${__dirname}/docs/.vuepress/dist`));

app.use('/api', v1);

app.get('/', (req: express.Request, res: express.Response): void => {
  res.sendFile(`${__dirname}/docs/.vuepress/dist/index.html`);
});

app.listen(8080);
