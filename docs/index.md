# PRÁCTICA 8: Aplicación de procesamiento de notas de texto

* En esta octava práctica, se ha implementado la aplicación de procesamiento que se ha solicitado, utilizando para ello TypeScript como lenguaje, Node.js como entorno de ejecución, la API de file system de node y Visual Studio Code para el desarrollo del proyecto. Además, se han atendido a los principios SOLID.


## Configuración del entorno de trabajo:

* En primer lugar, hemos creado un nuevo directorio para alojar esta nueva práctica en nuestro directorio de prácticas. Además, creamos un proyecto como vimos en clase de teoría, para ello, lo que se hizo fue lo siguiente:
	
	* Generamos un fichero package.json en la raíz de nuestro proyecto, para gestionar las dependencias.
	
		* **npm init --yes**

	* Generamos un fichero tsconfig.json en la raíz de nuestro proyecto, que va a contener las opciones del compilador de TypeScript.
	
		* **tsc --init**
		* De entre todas las opciones que se ofrecen, solo vamos a descomentar y completar las siguientes:

                      “exclude”: [
		                   “./test”,
		                   “.node_modules”,
		                   “./dist” ],		      
    	              "target": "ES2020",	  
                      "declaration": true, 	  
    	              "outDir": "./dist",	  
    	              "rootDir": "./src",	  
                      "noImplicitAny": true,   	  
                      "strictNullChecks": true,	  
                      "noImplicitReturns": true

	* Se utilizará el paquete watch para detectar los cambios realizados sobre los ficheros con código fuente en TypeScript (los almacenados en el directorio src).
		
		* **npm install --save-dev tsc-watch**
		* En el package.json, añadimos a la sección de script: "start": "tsc-watch --onSuccess \"node dist/index.js\""

	* Se utilizará el paquete typedoc para generar la documentación del proyecto.
		
		* **npm install --save-dev typedoc**
		* Crear el fichero typedoc.json, y añadimos:
		
                {
	                "entryPoints": ["./src"],
	                "out": ["./doc"]
                }
      * En el package.json, añadimos a la sección de script: “doc”: “typedoc”

  * Se utilizará el framework Mocha y la librería de asertos Chai para generar las pertinentes pruebas de desarrollo.
  
    * **npm install --save-dev mocha chai @types/mocha @types/chai ts-node**
    * Crear el fichero .mocharc.json, y añadimos:

          {
	            “extension”: [“ts”],
              “spec”: “tests/**/*.spec.ts”,
              “require”: “ts-node/register”
          }
          
    * Crear el directorio tests, donde se alojarán las pruebas
    * En el package.json, añadimos “test”: “mocha”

  * Se utilizarán las GitHub Actions para realizar la integración continua y la inspección con Sonar Cloud:
    * Instalamos TypeScript como dependencia: npm install --save-dev typescript
    * Añadimos en GitHub Actions el workflow de Node.js y configuramos un workflow para los tests.
    
    * Incluimos en el package.JSON "coverage": "nyc npm test && nyc report --reporter=lcov"
    * En el directorio .github/worflows creamos un workflow para el coveralls y otro para SonarCloud.
    
  * Se crea un fichero .gitignore, para ignorar ciertos directorios o archivos a la hora de hacer el push al GitHub, y un fichero README.md para hacer una breve introducción a la práctica.

## Desarrollo de la Aplicación:

* En primer lugar, se testearon los módulos de yargs y de chalk por separado para comprobar su funcionamiento, así como, se realizó un documentación sobre estas herramientas. Una vez comprobado el funcionamiento de los módulos se ideó la estructuras de clases que iba a tener el sistema, y como consluión, se llevaría a cabo una clase para cada opción que tuviera la aplicación (además de una clase para realizar el coloreo de los mensajes y títulos con chalk. 


* Las operaciones (o comandos) que tiene que tener la aplicación son los siguientes:

	* ***add***
	* ***list***
	* ***modify***
	* ***read***
	* ***remove*** 


* Además, se incluyó una opción de ayuda (-h o --help), para especificar cómo funciona el comando:

	* ***add -h***

		![Help Add][helpAdd]


	* ***list -h***

		![Help List][helpList]
		
		
	* ***modify -h***

		![Help Modify][helpModify]

	
	* ***read -h***
	
		![Help Read][helpRead]


	* ***remove -h***
	
		![Help Remove][helpRemove]

### Comando Add:

* El comando Add se utilizará para añadir una nueva nota (o en caso de que sea un nuevo usuario se creará el directorio donde se alojarán sus notas). La sintaxis del comando es: 

	* add --usuario="***usuario dueño de la nota***" --titulo="***titulo de la nota***" --texto="***texto que tiene la nota***" --color="***color del título de la nota***" 

* Para este primer comando, se implementó una clase donde se le pasan los atributos del mismo al constructor. Se comprueba si el usuario es nuevo o no, y en caso negativo, se creará el directorio donde se alojarán sus notas. Se comprueba si ya existe una nota con el mismo título para el usuario dado, y en caso afirmativo se lanzará un mensaje de ERROR. Se comprueba si el color introducido está disponible (rojo, azul, verde, amarillo). En caso de que cumpla todas las comprobaciones, se añadirá una nueva nota al directorio del usuario. Los métodos de la API de node.js del File System que se utilizarón fueron los siguietes:

	* ***openSync***: Para abrir un fichero. Utilizado para comprobar si existe en el directorio una nota con el mismo nombre.
	* ***mkdirSync***: Para crear un nuevo directorio. Utilizado para comprobar si existe en la bbdd un directorio con el mismo nombre, o crear un nuevo directorio.
	* ***writeFileSync***: Para escribir en un fichero. Utilizado para escribir la nota en el fichero "titulo de la nota".json.

* Ejemplo de uso: 

	* ***Creación de una nota (ok):***

		![Add 1][add1]
		
		
	* ***Creación de una nota (ERROR: Nota con mismo título):***

		![Add 2][add2]
	
				
	* ***Creación de una nota (ERROR: Color no disponible):***

		![Add 3][add3]
		
		
### Comando List:

* El comando List se utilizará para listar los títulos de las notas de un usuario, y se coloreará del color que se especifique en la nota. La sintaxis del comando es: 

	* list --usuario="***usuario dueño de la nota***" 

* Para este segundo comando, se implementó una clase donde se le pasan los atributos del mismo al constructor. Se comprueba si el usuario tiene notas o no, y en caso afirmativo se muestran los títulos de las notas en el color indicado en la misma. Los métodos de la API de node.js del File System que se utilizarón fueron los siguietes:

	* ***readdirSync***: Para mostrar el contenido de un directorio. Utilizado para almacenar los títulos de las notas del directorio.
	* ***readFileSync***: Para leer de un fichero. Utilizado para leer cada nota del directorio.

* Ejemplo de uso: 

	* ***Listar notas (ok):***

		![List 1][list1]
		
		
	* ***Creación de una nota (ERROR: Usuario no tiene notas):***

		![List 2][list2]		
		
	
### Comando Modify:

* El comando Modify se utilizará para modificar una nueva nota. La sintaxis del comando es: 

	* modify --usuario="***usuario dueño de la nota***" --titulo="***titulo de la nota***" --texto="***texto que tiene la nota***" --color="***color del título de la nota***" 

* Para este tercer comando, se implementó una clase donde se le pasan los atributos del mismo al constructor. Se comprueba si la nota dada por el usuario existe, en caso negativo se mostrará un mensaje de ERROR. Si la nota existe se borrará y se procederá a invocar a la operación Add, pasándole las especificaciones indicadas en el comando modify. Los métodos de la API de node.js del File System que se utilizarón fueron los siguietes:

	* ***unlinkSync***: Para borrar un fichero. Utilizado para comprobar si existe el fichero en el directorio, y en caso afirmativo borrarlo.

* Ejemplo de uso: 

	* ***Modificación de una nota (ok):***

		![Modify 1][modify1]
		
		
	* ***Modificación de una nota (ERROR: Nota no existe):***

		![Modify 2][modify2]
		
		
### Comando Read:

* El comando Read se utilizará para leer (mostrar el título y texto) de una nota. La sintaxis del comando es: 

	* read --usuario="***usuario dueño de la nota***" --titulo="***titulo de la nota***"

* Para este cuarto comando, se implementó una clase donde se le pasan los atributos del mismo al constructor. Se comprueba si existe una nota con el título dado. En caso negativo se mostrará un mensaje de error, y en caso afirmativo, se mostrará el titulo de acuerdo al color que especifica la nota, y se mostrará el texto que tiene la misma. Los métodos de la API de node.js del File System que se utilizarón fueron los siguietes:

	* ***readFileSync***: Para leer un fichero. Utilizado para obtener el contenido de la nota.
	* ***openSync***: Para abrir un fichero. Utilizado para comprobar si existe en el directorio una nota con el mismo nombre.

* Ejemplo de uso: 

	* ***Lectura de una nota (ok):***

		![Read 1][read1]
		
		
	* ***Lectura de una nota (ERROR: Nota no existe):***

		![Read 2][read2]
		
		
### Comando Remove:

* El comando Remove se utilizará para eliminar una nota. La sintaxis del comando es: 

	* remove --usuario="***usuario dueño de la nota***" --titulo="***titulo de la nota***"

* Para este último comando, se implementó una clase donde se le pasan los atributos del mismo al constructor. Se comprueba si existe una nota con el título dado. En caso negativo se mostrará un mensaje de error, y en caso afirmativo, se eliminará la nota. Los métodos de la API de node.js del File System que se utilizarón fueron los siguietes:

	* ***unlinkSync***: Para borrar un fichero. Utilizado para comprobar si existe el fichero en el directorio, y en caso afirmativo borrarlo.

* Ejemplo de uso: 

	* ***Borrado de una nota (ok):***

		![Remove 1][remove1]
		
		
	* ***Borrado de una nota (ERROR: Nota no existe):***

		![Remove 2][remove2]
		
* ***NOTA:*** La línea 38 del fichero operacionRemove.ts es donde se aplica el comando unLinkSync, y está comentada, dado que sino fallarán los tests en GitHub Actions porque se aplica para una nota estática (que ya está borrada). Para que funcione correctamente este comando habrá que descomentar la línea. 
		
		
[helpAdd]: images/helpAdd.JPG "Help Add"
[helpList]: images/helpList.JPG "Help List"
[helpModify]: images/helpModify.JPG "Help Modify"
[helpRead]: images/helpRead.JPG "Help Read"
[helpRemove]: images/helpRemove.JPG "Help Remove"
[add1]: images/add1.JPG "Add 1"
[add2]: images/add2.JPG "Add 2"
[add3]: images/add3.JPG "Add 3"
[list1]: images/list1.JPG "List 1"
[list2]: images/list2.JPG "List 2"
[modify1]: images/modify1.JPG "Modify 1"
[modify2]: images/modify2.JPG "Modify 2"
[read1]: images/read1.JPG "Read 1"
[read2]: images/read2.JPG "Read 2"
[remove1]: images/remove1.JPG "Remove 1"
[remove2]: images/remove2.JPG "Remove 2"
