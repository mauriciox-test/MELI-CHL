//importar el modulo DE REDIS
const client = require('redis').createClient();//llamar y pedir cliente
const { promisify } = require("util");//establecer la promesa

client.on('connect', () => {//conexion de redis
    console.log('Redis client connected');
});

client.on("error", (error) => {
    console.error(error);//si hay error muestra error por consola
});

//creacion de constantes de cada operacion q se va a utilizar en redis con las "promesas"//The bind-function could be used to assign a function to a specific object even if the function was initially bound to another object.
const get = promisify(client.get).bind(client);//para obtener mensaje
const set = promisify(client.set).bind(client);//para establecer mensaje
const getList = promisify(client.lrange).bind(client);//para retornar los elementos especificados almacenados en la lista de la key
const del = promisify(client.del).bind(client);//para borrar el mensaje
const dbsize = promisify(client.dbsize).bind(client);//para hacer la cuenta

//exportar las funciones correspondientes declaradas en las constantes
module.exports = {
    get,
    set,
    getList,
    del,
    dbsize
};