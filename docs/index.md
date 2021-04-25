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


[helpAdd]: images/helpAdd.JPG "Help Add"
[helpList]: images/helpList.JPG "Help List"
[helpModify]: images/helpModify.JPG "Help Modify"
[helpRead]: images/helpRead.JPG "Help Read"
[helpRemove]: images/helpRemove.JPG "Help Remove"
