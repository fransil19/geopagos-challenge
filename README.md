Proyecto creado para el challenge de geopagos.

Se trata de una api rest que cuenta con dos endpoint: 

  Un get para traer todos los torneos finalizados con sus respectivos campeones

  Un Post para enviar los participantes de un torneo y que calcule el ganador.

  El ganador de cada partido se decide segun el genero del torneo (todos los participantes deben ser del mismo genero que el torneo) donde por ejemplo para torneos entre hombres se hara la suma del nivel del jugador con su fuerza y velocidad y a esa suma se la multiplica por una probabilidad de suerte. En el caso de ser mujeres se aplica la misma logica pero se suma el nivel y la reacción.

  Para utilizar esta api rest se requiere:

  Tener instalado Node.js. Link de instalacion https://nodejs.org/en/download/
  
  Tener instalado PostgreSQL. Link de instalacion https://www.postgresql.org/download/

  Para utilizar el proyecto:

  1. Clonar el repo en un directorio.
  2. Situarse con la terminal dentro del proyecto.
  3. Ejecutar el comando "npm install" para instalar todas las dependencias.
  4. Crear dentro de postgresql una base de datos, en este caso podemos ponerle de nombre "tournament"
  5. Crear dentro de la raiz del proyecto un archivo ".env" y dentro del mismo colocar la siguiente informacion:
    DATABASE_URL = 'postgres://usuariodb:contraseñadb@urldb:puertodb/nombre_base_de_datos' //Esta es una url para conexion a la base de datos que creamos antes, en urldb colocar "localhost" si esta dentro de la misma pc el servicio de base de datos postgres.
    PORT = puerto //Este sera el puerto donde queremos que inicie el servidor backend, si no lo colocamos por defecto tomara el puerto 3001, pero si esta ocupado por otro servicio mejor colocar otro puerto.
  6. Ejecutar el comando "npm start"
  7. Interactuar desde postman con los endpoints de la api de la siguiente forma.

  Calcular ganador del torneo

  METODO: POST
  
  URL: localhost:3001 //cambiar el numero de puerto si colocamos otro en el archivo .env
  
  BODY - RAW: {
    "players": [
        {
            "name": "Franco Silvestro",
            "level": 50,
            "strength":60,
            "speed": 80,
            "reaction": 45,
            "gender": "m"
        },
        {
            "name": "Cristian Sanchez",
            "level": 50,
            "strength":60,
            "speed": 80,
            "reaction": 45,
            "gender": "m"
        },
        {
            "name": "Alvaro Sanchez",
            "level": 50,
            "strength":60,
            "speed": 80,
            "reaction": 45,
            "gender": "m"
        },
        {
            "name": "Andres Sanchez",
            "level": 50,
            "strength":60,
            "speed": 80,
            "reaction": 45,
            "gender": "m"
        }
    ],
    "gender": "m"
}

Obtener torneos finalizados

  METODO: GET
  
  URL: localhost:3001 //cambiar el numero de puerto si colocamos otro en el archivo .env
  
  QUERY PARAMS: 
    "date": fecha //fecha en formato 'yyyy-mm-dd'. Por ejemplo: 2024-03-14
    "gender": gender //genero en formato caracter "m" para masculino, "f" para femenino.
