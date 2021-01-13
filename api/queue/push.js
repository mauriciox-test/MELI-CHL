//este es el metodo para sacar mensajes de la cola
const express = require('express');
const router = express.Router();

const {get,set,getList,del} = require('../../models/redis.js');

/*PUSH*/
router.get('/', async (req, res) => {//se declaran variables: req para recibir, res para responder, next para el siguiente 

    console.error(req.query.name)
    console.error(req.query.desc)

    var status = 200;
    if(typeof req.query.name  === 'string'){

        var message = await set(req.query.name,req.query.desc).catch((err) => {
            if (err) console.error(err)
        });

        if(message === 'OK'){
            status = 200;//si comple esta condicion, muestra status requerido 200 + el message
            message='SUCCESFULL';
        }
        else{
            status = 500;//si comple esta condicion, muestra status requerido 500 + el message
            message='NOT SUCCESFULL';
        }
    }else{
        status = 404;//si comple esta condicion, muestra status requerido 404 + el message
        message='ERROR WRONG DATA';    
    }
    // envia respuesta con el status y el message
    res.send({
        status: status,
        message: message
    })
});



module.exports = router;