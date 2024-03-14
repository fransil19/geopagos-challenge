# Tennis Tournament

Proyecto creado para el challenge de geopagos.

Se trata de una api rest que cuenta con dos endpoint:

Un GET para listar torneos finalizados con sus respectivos campeones

Un POST para enviar los participantes de un torneo y que calcule el ganador.

El ganador de cada partido se decide segun el genero del torneo (todos los participantes deben ser del mismo genero que el torneo) donde por ejemplo para torneos entre hombres se hara la suma del nivel del jugador con su fuerza y velocidad y a esa suma se la multiplica por una probabilidad de suerte. En el caso de ser mujeres se aplica la misma logica pero se suma el nivel y la reacción.

La probabilidad de suerte es un numero generado de manera aleatoria entre 0 y 1.

Para utilizar esta api rest se requiere:

Tener instalado Node.js. Link de instalacion https://nodejs.org/en/download/

Tener instalado PostgreSQL. Link de instalacion https://www.postgresql.org/download/


## Para utilizar el proyecto:

Install my-project with npm

```bash
    Clonar el repo en un directorio.
    Situarse con la terminal dentro del proyecto.
    Ejecutar el comando "npm install" para instalar todas las dependencias.
    Crear dentro de postgresql una base de datos, en este caso podemos ponerle de nombre "tournament"
    Crear dentro de la raiz del proyecto un archivo ".env" y dentro del mismo colocar la siguiente informacion: 
    
    DATABASE_URL = 'postgres://usuariodb:contraseñadb@urldb:puertodb/nombre_base_de_datos' //Esta es una url para conexion a la base de datos que creamos antes, en urldb colocar "localhost" si esta dentro de la misma pc el servicio de base de datos postgres. 
    PORT = puerto //Este sera el puerto donde queremos que inicie el servidor backend, si no lo colocamos por defecto tomara el puerto 3001, pero si esta ocupado por otro servicio mejor colocar otro puerto.
    Ejecutar el comando "npm start"
    Interactuar desde postman con los endpoints de la api de la siguiente forma.
```
    
## API Reference

#### Get tournaments

```http
  GET /  Ejemplo de ruta: localhost:3001/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date` | `date` | Fecha en formato 'yyyy-mm-dd'. Por ejemplo: 2024-03-14 |
| `gender` | `string` | Genero en formato caracter "m" para masculino, "f" para femenino. |

Puede optar por no enviar parametros para traer todos los torneos finalizados o puede enviar solo la fecha o solo el genero para que filtre segun el parametro enviado

#### Calculate tournament winner

```http
  POST /  Ejemplo de ruta: localhost:3001/
```
```json

{ 
    "players": [ 
        { 
            "name": string,
            "level": int,
            "strength":int,
            "speed": int,
            "reaction": int,
            "gender": string 
        } 
    ],
    "gender": string 
}
```
Ejemplo

```json
{ 
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

```