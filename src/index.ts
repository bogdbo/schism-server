import express from 'express';
import { tagsRoute } from './routes/tags.route';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { internalServerError, notFound } from './utils/errorHandler';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

app.use('/tags', tagsRoute);

app.use(notFound);
app.use(internalServerError);

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});
