var mysql = require('mysql');

var connection = function () {
  return mysql.createConnection({
    host : 'cursonode.mysql.dbaas.com.br',
    user : 'cursonode',
    password : 'motopartes2018',
    database : 'cursonode'
  });
}

module.exports = function() {
  return connection;
}
