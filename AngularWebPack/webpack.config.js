module.exports = require('./config/webpack.dev.js');


/*
switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./config/webpack.prod.js')({env: 'production'});
    break;
  case 'testing':
    module.exports = require('./config/webpack.test.js')({env: 'test'});
    break;
  case 'development':
  default:
    module.exports = require('./config/webpack.dev.js')({env: 'development'});
} 
*/