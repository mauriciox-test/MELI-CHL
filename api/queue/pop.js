//este es el metodo para sacar mensajes de la cola

const express = require('express');
const router = express.Router();

const {get,set,getList,del} = require('../../models/redis.js');//declaro constantes necesarias referenciadas en el redis.js

/* GET*/
router.get('/', async (req, res) => {//se declaran variables: req para recibir, res para responder, next para el siguiente 
    console.error(req.query.id)

    var status = 200;
    var message = await del(req.query.id).catch((err) => {//como es asincrono el tema la funcion aguarda para agarrar la variable y en funcion de eso sigue el siguiente comportamiento
        if (err) console.error(err)
    });

    if(message === 1){
        status = 200;//si comple esta condicion, muestra status requerido 200 + el message
        message='removed as requested';
    }
    if(message === 0){
        status = 500;//si cumple esta condicion, muestra status requerido 500 + el message
        message='not found';
    }

    // envia respuesta con el status y el message
    res.send({
        status: status,
        message: message
    })
    });



module.exports = router;

