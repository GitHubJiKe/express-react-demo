var login = require('./login');
var users = require('./users');

module.exports = {
  '/api/login': login,
  '/api/users': users,
}