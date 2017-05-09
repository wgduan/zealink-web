var restify = require('restify');
var product = require('./products');

console.log(product.getProducts());

function respond(req, res, next) {
  //res.send('hello ' + req.params.name);
  res.send(product.getProducts());
  next();
}

var server = restify.createServer();
server.use(restify.CORS());

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/products',function(req,res,next){
  res.send(product.getProducts());
  next();
});

server.listen(8888, function() {
  console.log('%s listening at %s', server.name, server.url);
});