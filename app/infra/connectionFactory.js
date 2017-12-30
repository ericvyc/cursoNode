var mysql = require('mysql');

var connection = function () {

  // if(!process.env.NODE_ENV) {
    return mysql.createConnection({
      host : 'cursonode.mysql.dbaas.com.br',
      user : 'cursonode',
      password : 'motopartes2018',
      database : 'cursonode'
    });
  // }

  // if(!process.env.NODE_ENV == 'test') {
  //   return mysql.createConnection({
  //     host : 'cursonode.mysql.dbaas.com.br',
  //     user : 'cursonode',
  //     password : 'motopartes2018',
  //     database : 'cursonode_test'
  //   });
  // }
  //
  // if(!process.env.NODE_ENV == 'production') {
  //   return mysql.createConnection({
  //     host : 'cursonode.mysql.dbaas.com.br',
  //     user : 'cursonode',
  //     password : 'motopartes2018',
  //     database : 'cursonode'
  //   });
  // }

}

module.exports = function() {
  return connection;
}
