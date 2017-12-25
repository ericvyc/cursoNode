function ProdutosDAO(conn) {
  this._conn = conn;
}

ProdutosDAO.prototype.lista = function (callback){
  this._conn.query('select * from livros', callback);
}

ProdutosDAO.prototype.salvar = function (produto, callback){
  this._conn.query('insert into livros set ?', produto, callback);
}

module.exports = function() {
  return ProdutosDAO;
}
