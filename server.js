//toda la configuracion del servidor necesaria para levantar el server
const http = require('http');//llamada al modulo http para crear el server http
const app = require('./app');
const port = process.env.PORT || 8081;//seteando el puerto
const server = http.createServer(app);//usando el metodo para crear el server
server.listen(port);



/*configuracion anterior del server*/
/*
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
*/