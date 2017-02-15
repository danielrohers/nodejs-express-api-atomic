const serveStatic = require('serve-static');
const path = require('path');

const getMiddleware = module => require(`../app/middlewares/${module}`);
const getRoute = module => require(`../app/routes/${module}`);

module.exports = (app) => {
  // PUBLIC FILES

  app.use('/', serveStatic(path.join(__dirname, '../apidoc')));

  // MIDDLEWARES

  app.use(getMiddleware('query'));

  // ROUTES

  app.use('/api/foo', getRoute('foo'));


  // ERROR HANDLERS

  // catch 404 and forward to error handler
  app.use(getMiddleware('notFound'));

  // error handler
  app.use(getMiddleware('errorHandler')(app));
};
