var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {

  it('#listagem json', function(done) {

    request.get("/produtos")
    .set('Accept','application/json')
    .expect('Content-type',/json/)
    .expect(200, done);

  });

  it('#cadastro de novo produto com dados invalidos', function(done) {

    request.post('/produtos')
    .send({
      titulo : '',
      descricao : 'livro supertest'
    })
    .expect(400, done);

  });

  it('#cadastro de novo produto com dados validos', function(done) {

    request.post('/produtos')
    .send({
      titulo : 'livro supertest',
      descricao : 'livro supertest',
      preco : 129.99
    })
    .expect(302, done);

  });

});
