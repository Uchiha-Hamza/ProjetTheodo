import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import moviesRouter from './routes/movies.js';
import { routeNotFoundJsonHandler } from './services/routeNotFoundJsonHandler.js';
import { jsonErrorHandler } from './services/jsonErrorHandler.js';
import { appDataSource } from './datasource.js';

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    const app = express();
    app.use(bodyParser.json());
    app.use(logger('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Register routes
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/movies', moviesRouter);

    // Register 404 middleware and error handler
    app.use(routeNotFoundJsonHandler); // this middleware must be registered after all routes to handle 404 correctly
    app.use(jsonErrorHandler); // this error handler must be registered after all middleware to catch all errors

    const port = parseInt(process.env.PORT || '8000');

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
    //app.listen(8000, () => {
    //console.log('Le serveur est en cours d\'exécution sur le port 8000');
    //});
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
