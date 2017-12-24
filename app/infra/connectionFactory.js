var mysql = require('mysql');

module.exports = function(){
  return mysql.createConnection({
    host : 'cursonode.mysql.dbaas.com.br',
    user : 'cursonode',
    password : 'motopartes2018',
    database : 'cursonode'
  });
}
