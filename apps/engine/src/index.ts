import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes.js';

const app: Application = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', router);

// Start server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});