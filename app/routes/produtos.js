module.exports = function(app){

  app.get('/produtos', function(req, res, next){

    var connection = app.infra.connectionFactory();
    var produtosDao = new app.infra.ProdutosDAO(connection);

    produtosDao.lista(function(err, results){

      if(err) {
        return next(err);
      }

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
    res.render('produtos/form', {errosValidacao : {}, produto : {}});
  });

  app.post('/produtos', function(req, res){

    var produto = req.body;

    req.assert('titulo', 'Titulo e obrigatorio').notEmpty();
    req.assert('preco', 'Formato invalido').isFloat();

    var erros = req.validationErrors();

    if(erros){

      res.format({
        html : function() {
          res.status(400).render('produtos/form', { errosValidacao : erros , produto : produto });
        },
        json : function() {
          res.status(400).json(erros);
        },
        'text/plain' : function() {
          res.send(erros);
        }
      });

      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDao = new app.infra.ProdutosDAO(connection);

    produtosDao.salvar(produto, function(err, results){
      res.redirect('/produtos');
    });

  });

}
