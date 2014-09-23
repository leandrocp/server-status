var express = require('express');
var ping = require('ping');

var app = express();
var router = express.Router(); 

router.get('/ping/:host', function(req, res){
  var host = req.params.host;
  ping.sys.probe(host, function(isAlive){
    var msg = isAlive ? 'host ' + host + ' is alive!' : 'host ' + host + ' is dead';
    res.json({
      status: isAlive,
      message: msg
    });
  });
});

app.use('/', router);

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
