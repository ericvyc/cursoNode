function ProdutosDAO(conn) {
  this._conn = conn;
}

ProdutosDAO.prototype.lista = function (callback){
  this._conn.query('select * from livros', callback);
}

module.exports = function() {
  return ProdutosDAO;
}
