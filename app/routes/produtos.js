module.exports = function(app){

  app.get('/produtos', function(req, res){

    var connection = app.infra.connectionFactory();
    var produtosDao = new app.infra.ProdutosDAO(connection);

    produtosDao.lista(function(err, results){

      res.format({
        html : function() {
          res.render('produtos/lista',{ lista : results });
        },
        json : function() {
          res.json(results);
        },
        'text/plain' : function() {
          res.send('results');
        }
      });
    });

    connection.end();
  });

  app.get('/produtos/form', function(req, res){
    res.render('produtos/form', {errosValidacao : {}});
  });

  app.post('/produtos', function(req, res){

    var produto = req.body;

    req.assert('titulo', 'Titulo e obrigatorio').notEmpty();
    req.assert('preco', 'Formato invalido').isFloat();

    var erros = req.validationErrors();

    if(erros){
      res.render('produtos/form', { errosValidacao : erros });
      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDao = new app.infra.ProdutosDAO(connection);

    produtosDao.salvar(produto, function(err, results){
      res.redirect('/produtos');
    });

  });

}
