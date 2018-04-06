var urlConfig = require('../routes/urlConfig')

function registerRoutes(app) {
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Charset, apiKey');
    res.header('Access-Control-Allow-Methods', 'HEAD,PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', 'express 4');
    const { url } = req;
    if (url.startsWith('/api')) {
      next();
    } else {
      res.render('index', { layout: false });
    }
  });
  for (let url in urlConfig) {
    app.use(url, urlConfig[url])
  }
}

module.exports = {
  registerRoutes
}