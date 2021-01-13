//toda la logica de la API esta aca. Aca se hacen las llamadas a todos los diferentes metodos, funciones necesarias para que corra la API

const express = require('express');//servicio web
const app = express();

//declaracion de metodos requeridos y su ubicacion
const pop = require('./api/queue/pop');
const push = require('./api/queue/push');
const get = require('./api/queue/count');
const bodyParser = require('body-parser');//accesar a la información del cuerpo de peticiones

app.use(bodyParser.urlencoded({extended: false}));//analiza el texto como datos de URL codificada (que es como navegadores tienden a enviar datos de formulario de formas regulares SET para POST) y expone el objeto resultante (que contiene las claves y valores)
app.use(bodyParser.json());//basicamente le dice al sistema que quiere usar un json

//configuracion inicial del server
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});


app.use('/pop', pop);// cuando se pida ir a esta url va a llamar a pop
app.use('/push', push);// cuando se pida ir a esta url va a llamar a push
app.use('/count', get);// cuando se pida ir a esta url va a llamar a get

module.exports = app;


/*

//importar el modulo DE REDIS
var redis = require('redis');
//crear un nuevo cliente
var client = redis.createClient();
//establecer conexion
client.on('connect', function() {
    console.log('connected');
});
//insertar mensajes
client.set('message1', 'pusheo un mensaje', function(err, reply) {//Si fallase la operación, el argumento err de la función callback representa el error
    console.log(reply);
  });
// busqueda en BD
client.exists('message', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
});
//eliminar de la BD
client.del('message', function(err, reply) {
    console.log(reply);
});
// otra busqueda
client.exists('message', function(err, reply) {
    if (reply === 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
});

//contar mensajes
client.dbsize(function(err, reply) {
    console.log(reply);
});

module.exports = app;
*/