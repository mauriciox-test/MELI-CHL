<INDEX>
<A. EL CHALLENGE>
<B. DESCRIPCION DE LA APP REALIZADA> 
<B.1 Entendiendo el problema...>
<B.2 Elementos para el desarrollo de la solucion>
<B.3 Entorno de trabajo>
<B.4 Configuracion inicial>
<C. MANUAL DE USR>
<1 Estructura del repositorio>
<2 Instrucciones recomendadas>
<D. PROBLEMAS ENCONTRADOS>

<A. EL CHALLENGE>
Caso - Redis API
Objetivo
El challenge consta de implementar una cola de mensajes utilizando un Redis y además implementar una
API que nos permita abstraernos.
La misma deberá estar conformada por métodos (endpoints) que debe cumplir con el siguiente contrato:
A. Pop
Este método lo que hará es recibir obtener el primer valor de la lista de elementos en la queue y eliminarlo de
la misma.
● POST /api/queue/pop
Respuestas:
● en el caso de encontrarlo
○ Status: 200
○ ‘message’: <msg>
● en el caso de que no pueda crearlo
○ Status: 500
○ ‘message’: <msg>
Ejemplo:
● Request
○ POST /api/queue/pop
● Response
○ HTTP/1.1 200 OK
○ ‘message’: “body del mensaje”
B. Push.
Este método lo que hará es enviar un nuevo mensaje a la queue.
● POST /api/queue/push
Parámetros:
Nombre Tipo Descripción
message string Envía el mensaje
Respuestas:
● en el caso de poder crearlo
○ Status: 200
● en el caso de que los parámetros estén mal
○ Status: 404
● en el caso de que no pueda crearlo
○ Status: 500
Ejemplo:
● Request:
○ POST /api/queue/push
○ {“message”:”Pusheo un mensaje”}
● Response:
○ HTTP/1.1 200 OK
○ {“message”: “Pusheo un mensaje”}
B. Obtener Cantidad de Mensajes.
Este método lo que hará es chequear la cantidad de mensajes existentes en la cola pendientes de
procesamiento.
● GET /api/queue/count
Respuestas:
● en el caso de poder crearlo
○ Status: 200
● en caso de no encontrarlo
○ Status: 404
Ejemplo:
● Request:
○ GET /api/queue/count
● Response:
○ HTTP/1.1 200 OK
○ {“count”: 351}
Consideraciones generales
A tener en cuenta:
● Se podrán crear todas las funciones complementarias que se consideren necesarias para un
correcto funcionamiento de la aplicación.
● Se recomienda modularizar y aplicar buenas prácticas de programación para un mejor
entendimiento del código.
● Se considerará durante la evaluación el manejo de errores, de autenticación y la documentación del
código.
Bonus (opcionales):
● Dockerizar la aplicación
● Tener el código en Github
● Hacer test unitarios y de integración
● Agregar funcionalidad a la api y cola. (Ej: autenticación de la api, logs, pop y push en batch, métricas,
lo que se te ocurra)
● Endpoint de estado de salud de Redis.
● Documentación de cómo se implementó, si hay credenciales, cómo ejecutarlo,detalle de mejoras
implementadas.
Entregables (via email):
● Código fuente (en zip o url al repositorio) e instrucciones para levantar la API
● Descripción de la aplicación realizada, problemas y soluciones con los que se encontró al realizar
esta API.

<B. DESCRIPCION DE LA APP REALIZADA>

<B.1 Entendiendo el problema...>
Vale la pena destacar que no soy desarrollador, programador, coder ..etc, ni tengo experiencia en testing y QA, como bien se puede ver en el codigo el cual es el resultado de un compendio de multiples fuentes de informacion que fui utilizando, las cuales estan citadas en los links a los que hacia referencia segun iba desglosando el problema y probando lo que decia cada autor.

Lo primero que hice fue investigar el funcionamiento de colas a traves de diversos ejemplos que habian en Internet. A partir de esto comence a indagar en lo que era Redis y busqué los frameworks que podian conectarse a esta BD.

Adicionalmente estuve indagando en como podria mostrar la informacion de la forma mas facil.

Refrescar lo basico requerido:
Pop=sacar elemento de la cola
Push=meter elemento a la cola
Count= contar elementos de la cola
Fuentes de informacion para comenzar a entender el problema:
https://laingenieria.info/questions/2191/como-implementar-una-cola-de-mensajes-en-redis
https://aws.amazon.com/es/elasticache/what-is-redis/
https://www.ibm.com/support/knowledgecenter/es/SSFKSJ_7.5.0/com.ibm.mq.pro.doc/q002620_.htm
https://www.youtube.com/watch?v=mM_SROJZGwQ&t=311s
https://gamedevelopment.tutsplus.com/es/tutorials/how-to-implement-and-use-a-message-queue-in-your-game--cms-25407
https://progexpertos.com/q/107564/redis-queue-rq-task-queues-in-production
https://geekflare.com/es/queuing-systems-for-backend-developers/

<X. ¡NUEVO! -> Ajustes a la version para usar POST en vez de GET>
https://grokonez.com/node-js/nodejs-restapis-how-to-create-nodejs-express-restapis-post-get-put-delete-requests
https://riptutorial.com/node-js/example/21747/handling-post-requests
https://riptutorial.com/node-js/example/20967/post-api-using-express
https://www.toolsqa.com/postman/post-request-in-postman/
https://www.codota.com/code/javascript/functions/express/Router/post


<B.2 Elementos para el desarrollo de la solucion>
A continuacion describo porque elegi cada elemento para armar el sistema:

Una BD: Redis, porque? requerido en la consigna
Un editor de texto: Visual code, porque? recomendado en algun video-tutorial
Un framework: NodeJS, porque? despues de muchos tutoriales de diferentes lenguajes de programacion, aparentemente este era sencillo
Algo para insertar y consultar info: postman. porque? recomendacion especifica para ahorrar el desarrollo de la API
Un repositorio: Github, porque? estaba requerido en la consigna y por mail el zip/rar/gz NO pasa...

->GIT y Github
subir proyecto a github
https://www.youtube.com/watch?v=RRegIKu-z3k
Curso practico de git y github
https://www.youtube.com/watch?v=HiXLkL42tMU
problemas con el origin
https://www.datree.io/resources/git-error-fatal-remote-origin-already-exists#:~:text=%22Remote%20origin%20already%20exists%22%20error,-%E2%80%8D&text=The%20solution%20is%20to%20update,remote%20repository%20with%20that%20name.

->NodeJS
Porque elegir NodeJS
https://www.toptal.com/nodejs/por-que-demonios-usaria-node-js-un-tutorial-caso-por-caso
curso principantes nodejs
https://www.hektorprofe.net/curso/nodejs-para-principiantes/simular-api
Descarga NodeJS
https://nodejs.org/es/download/
Modulos adicionales de NodeJS
https://expressjs.com/es/starter/installing.html
Entendiendo los metodos de NodeJS
https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
errores comunes en nodejs
https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes

->Redis
Entendiendo redis
https://www.youtube.com/watch?v=fOG3WZTjpWs
manejo de listas en redis
https://www.youtube.com/watch?v=ryBWzp9BkdE&t=1s
adicionales redis
https://www.youtube.com/watch?v=fOG3WZTjpWs
Comandos redis:
set= poblar la BD //  set mikey "hola cone"
get= obtener info // get mikey
del = borrar info // del mikey
incr 
decr 
rpush mylist A //agregar elemento a la lista desde la derecha
lrange mylist 0 0 // consultar elementos de la lista desde la izq, en este caso devuelve "A"
rpush mylist B
rpush mylist C
lrange mylist 0 2 // consultar elementos de la lista desde la izq, en este caso devuelve "A" "B" "C"
lrange mylist 0 -1 // consultar total elementos de la lista desde la izq, en este caso devuelve "A" "B" "C"
rpush mylist D E F G H // agregar multimples elementos desde la derecha
lpush mylist Z Y X // agregar multiples elementos desde la izquierda
lrange mylist 0 -1 // consulta total elementos de la lista ordenados desde la izquierda, en este caso devuelve X Y Z A B C D E F G H
rpop mylist //para sacar el ultimo elemento de la derecha
lpop mylist //para sacar el ultimo elemento de la izquierda
llen mylist//devuelve el tamaño de la lista
ltrim mylist 7 10// cortar la lista desde x elemento hasta y elemento

->Postman
https://openwebinars.net/blog/que-es-postman/
https://lamadriguerabit.com/articulos/que-es-postman/

<B.3 Entorno de trabajo>
Para utilizar la app utilice las siguientes versiones de las herramientas mencionadas en el apartado anterior. Se recomienda usar entorno similar para probar el funcionamiento del mismo:
    Windows 10: sistema operativo base
    Postman 7.36.1: plataforma de colaboracion para desarrollo de API. En mi caso use el apli client que viene por defecto
    NodeJS 14.15.4: el framework para desarrollar
    Redis 3.2.100: es la base de datos. Se usa la version para windows
    
<B.4 Configuracion inicial>
Antes de armar el codigo, fue necesario realizar la descarga de cada herramienta y la importacion del modulo de redis para nodejs segun los autores de los siguientes links:

Como instalar redis en windows y descarga
https://www.youtube.com/watch?v=lwcikOT97lc&list=PLCTD_CpMeEKRjdM94onQPs3qTISaPkmxa&index=2
https://github.com/MicrosoftArchive/redis/releases
https://www.youtube.com/watch?v=MqieSnSv4ik
Instalando componente para que NodeJS hable con Redis
https://www.sitepoint.com/using-redis-node-js/#:~:text=%20Using%20Redis%20with%20Node.js%20%201%20Installing,let%E2%80%99s%20see%20how%20to%20store%20key-value...%20More%20
https://www.npmjs.com/package/redis
Como instalar y comenzar con nodejs
https://www.youtube.com/watch?v=BhvLIzVL8_o
Verificacion en consola
https://www.postman.com/downloads/
configuracion Entorno
http://ualmtorres.github.io/howtos/RedisNodeJS/
deep dive into queues nodejs
https://blog.logrocket.com/a-deep-dive-into-queues-in-node-js/


Ahora opté por ordenar todo utilizando lo recomendado en un articulo acerca de la arquitectura, luego detecté qué era necesario para conectar nodejs con redis segun los articulos a continuacion:

Definiendo la Arquitectura de la solucion
https://soshace.com/how-to-architect-a-node-js-project-from-ground-up/
Interaccion con Redis usando NodeJS
http://ualmtorres.github.io/howtos/RedisNodeJS/
Documentacion de colas en nodejs
https://blog.logrocket.com/a-deep-dive-into-queues-in-node-js/
Para hacer la cuenta de items en redis desde nodejs
https://stackoverflow.com/questions/18056518/number-of-items-in-redis-set
https://stackoverflow.com/questions/33618849/how-can-i-get-the-count-of-keys-in-redis

<C. Manual de usr>
<1 Estructura del repositorio>

>node js //root
    >api\queue //aqui estan las funciones requeridas en la consigna pop.js, push.js, count.js
    >models //aqui esta armada la logica de la conexion entre la app y la BD en redis.js
    >node_modules //se genero automatico cuando hice alguna descarga de componente necesaria (RECOMIENDO NO BORRAR)
    >testUnit //hice pruebas unitarias en la primera version pero luego no alcance a realizarlas en la ultima version
    app.js //este archivo contiene la logica de la api
    package-lock.json //se genero automatico cuando hice alguna descarga de componente necesaria(RECOMIENDO NO BORRAR)
    server.js //es el servidor que hay que levantar cada vez que se quiere probar
    Readme.md //es este archivo

<2 Instrucciones recomendadas>

a. Descargar contenido de sitio de github y descomprimirlo en el lugar deseado
b. Abrir consola y posicionarse en directorio donde se descomprimio la API
c. Levantar servidor desde consola con comando "node server.js" (Ver en .docx "levantar server" )
d. En otra consola, levantar la BD en redis (Ver en .docx "levantar BD" )
e. Desde postman, ejecutar las peticiones POP, PUSH y  COUNT segun corresponda. (ver en .docx COUNT, PUSH, POP  respectivamente) 
f. Para el PUSH Y POP al utilizarse ahora el metodo POST, las consultas se deben cargar mendiante el body en x-www-form-urlencoded o raw(JSON)

<D. PROBLEMAS ENCONTRADOS>
    Basicamente TODO a raiz que es el primer desarrollo que hago.

    Un gran problema que tuve, fue al generar la busqueda de informacion en Redis puesto que no lograba que me devolviera mensajes por consola utilizando callbacks; dejé el codigo que habia generado como /*documentado*/  al final de ese archivo Redis.js y lo terminé desechando porque la solución que termine utilizando estaba en otro tutorial con las "promesas", concepto que desconocia que maneja nodejs, pero que termino funcionando para resolver el envio de mensajes asincrono."Una promesa en Nodejs, se puede manipular mediante la palabra reservada promise y se encuentra conformada principalmente por retornar dos valores de respuesta: resolve () que devuelve el valor cuando es exitosa la operación realizada de la tarea asíncrona y reject () cuando la operación arroja algún error." A la final ahorro mucho codigo que habia hecho.

    Dado que contaba con poco tiempo y no sabia como generar la interfaz para mostrar la informacion, resolvi utilizar el postman para ahorrar tiempo.

    Cuando estuve haciendo la prueba para enviar por mail el zip, me dí cuenta que GMAIL lo bloqueaba por el contenido de los archivos. Entonces podia compartirles un sitio de mi DRIVE, pero resolví intentar el uso de Git y Github. Cuando generé el origin para subir la info a github, nombré el destino erroneamente y no me dejaba cargar la info. Tiempo despues (al dia siguiente), pude encontrar otro tutorial donde resolvia el tema de corregir la url.

    Para la version 2 el cambio del metodo GET por POST en el codigo no supuso mayores modificaciones al codigo; la dificultad la tuve en el postman puesto que no lograba hacer que generara el formulario para que los valores no se cargaran en la URL (asi como en el metodo GET). Al final pudo funcionar haciendolo a traves de JSON o el x-www-form-urlencoded.

