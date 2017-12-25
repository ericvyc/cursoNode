module.exports = function() {

  return function(conn) {

    this.lista = function (callback){
      conn.query('select * from livros', callback);
    }

    return this;

  }

}
