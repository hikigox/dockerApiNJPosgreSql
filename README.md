# dockerApiNJPosgreSql

### Introduccion

Este proyecto es la creacion de tres contenedores los cuales son los siguientes

 1. APIRestFull(NodeJs)
 2. Base de datos (PostgreSql)
 3. Bin/ssh (Nginx)

Donde todo el despliege esta aplicado al archivo docker-compose que se encuentra en la rama principal.
Para ejecutar  y crear todos los servicios usamos el comando 

    docker-compose up -d

con este levantamos los 3 contenedores y quedaran listos para usar 

#### Condiciones
En la carpeta raiz crear un .env y asignarle los datos deseados deacuerdo a la logica que se muestra a continuacion, o sencillamente dejarlos como esta.

    POSTGRES_USER=admin
    POSTGRES_PASSWORD=123
    POSTGRES_DB=dbAnimales
Que es la configuracion de la base de datos

Si no se genera tampoco el .env dentro de la carpeta api, tambien crearlo y agregar los siguientes datos.

    DB_HOST='database'
    DB_PORT=5432
    DB_USERNAME='admin'(mismo del anterior .env)
    DB_PASSWORD='123'(mismo del anterior .env)
    DB_NAME='dbAnimales'(mismo del anterior .env)

y con eso ya deberia de poder correr el proyecto
