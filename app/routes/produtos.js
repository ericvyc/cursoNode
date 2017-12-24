module.exports = function(app){

  app.get('/produtos', function(req, res){

  	var mysql = require('mysql');

    var connection = mysql.createConnection({
      host : 'cursonode.mysql.dbaas.com.br',
      user : 'cursonode',
      password : 'motopartes2018',
      database : 'cursonode'
    });

    connection.query('select * from livros', function(err, results){
      res.render('produtos/lista',{ lista : results })
    });

    connection.end();
  });

}
