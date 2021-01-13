//este es el metodo para contar mensajes de la cola
const express = require('express');
const router = express.Router();

const {get,set,getList,del,dbsize} = require('../../models/redis.js');//declaro constantes necesarias referenciadas en el redis.js

/*COUNT*/
router.get('/', async (req, res) => {//se declaran variables: req para recibir, res para responder
    var status = 200;
    var message = await dbsize().catch((err) => {//la funcion dbsize es la que cuenta los elementos en la BD
        if (err) console.error(err)
    });

    if(message === 0){
        status = 404;
        message='not pending to process';//si existe error en la consulta, muestro error 404
    }

    // enviar respuesta con la cuenta en caso que existan mensajes en la BD
    res.send({
        status: status,
        message: message
    })
    });



module.exports = router;

