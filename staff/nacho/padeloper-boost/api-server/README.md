# API SERVER

El directorio api server será el encargado de manejar todas las operaciones CRUD con la base de datos. La api server funcionará en el puerto 5000 a nivel local. En el archivo .env pueden verse reflejados los elementos necesarios para la conexión.

## Estructura de carpetas

Con el objetivo de hacer la api server lo más escalable y reusable posible, se ha procedido con la siguiente estructura de directorios y de archivos:

### src/index.js

Este archivo contendrá la configuración necesaria para realizar las conexiones correspondientes con la base de datos mediante las variables de entorno definidas en el .env,precisará por lo tanto de mongoose. Incluiremos en este archivo también el cors y routes para indicar el endpoint repetitivo, en nuestro caso '/api' y no tener que ponerlo cada vez.

### models

Esta carpeta contiene el archivo principal del modelo de datos. Se define con mongoose. En el destacamos dos entidades o colecciones diferenciadas:
-  Usuarios: Dentro de la colección de usuarios dispondremos de una subcolección llamada stats, que será para obtener las estadísticas del usuario.
-  Ligas: Dentro de ligas tendremos 3 subcolecciones, players, teams y matches, cada una de las cuales admite los datos presentados por el esquema.

### logic

En este directorio encontraremos toda la lógica de manejo de datos de la aplicación. Incluiremos todos los métodos que utilizaremos para el CRUD

### routes

El directorio routes contendrá en su archivo index.js todos los endpoints que va a utilizar la aplicación (api-server), acompañados de la función que se desempeñará en dicho endpoint:

```javascript
    const { Router } = require('express')
    const bodyParser = require('body-parser')
    const { listLeagues} = require('./handlers')

    const router = Router()
    const jsonBodyParser = bodyParser.json()

    router.get('/leagues',listLeagues)

    module.exports = router
```
Dentro de routes dispondremos de la carpeta handlers, que tendrá todas las funciones creadas en el logic.

#### handlers
 
 Este directorio es donde se realizará el error handling de la aplicación, cada uno de los archivos se comunicará con el método de logic correspondiente, por lo tanto nos tendremos que importar el logic. Dentro del método de logic correspondiente haremos el return. El handling será quien devuelva el res.send / res.json para mostrar el error o la data establecida por el logic.

## Heroku  padeloper

[url](https://whispering-hollows-28610.herokuapp.com/)
[git](https://git.heroku.com/whispering-hollows-28610.git)