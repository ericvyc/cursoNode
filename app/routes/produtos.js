module.exports = function(app){

  app.get('/produtos', function(req, res){
  	//res.send("<html><body><h1>Listagem de produtos</h1></body></html>");
  	res.render("produtos/lista");
  });

}
