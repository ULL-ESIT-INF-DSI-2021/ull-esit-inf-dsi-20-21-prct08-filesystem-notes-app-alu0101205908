import { Add } from "./principal/operacionAdd";
import { List } from "./principal/operacionList";


const yargs = require('yargs');

yargs.command("add", 'Añadir una nueva nota', {
    usuario: {
        describe: 'Usuario dueño de la nota',
        demandOption: true,
        type: 'string',
    },
    titulo: {
        describe: 'Titulo de la nota',
        demandOption: true,
        type: 'string',
    },
    texto: {
        describe: 'Cuerpo de la nota',
        demandOption: true,
        type: 'string',
    },
    color: {
        describe: 'Color de la nota',
        demandOption: true,
        type: 'string',
    },
});


yargs.command("list", "Listar las notas de un usuario", {
    usuario: {
        describe: 'Usuario a listar las notas',
        demandOption: true,
        type: 'string',
    }
});


yargs.command("read", "Leer nota de un usuario", {
    usuario: {
        describe: 'Usuario dueño de la nota a leer',
        demandOption: true,
        type: 'string',
    },
    titulo: {
        describe: 'Titulo de la nota a leer',
        demandOption: true,
        type: 'string',
    },
});


yargs.command("remove", "Borrar nota de un usuario", {
    usuario: {
        describe: 'Usuario dueño de la nota a borrar',
        demandOption: true,
        type: 'string',
    },
    titulo: {
        describe: 'Titulo de la nota a borrar',
        demandOption: true,
        type: 'string',
    },
});


yargs.help();
yargs.alias("help", "h");


const argv = yargs.argv;
const comando = argv._[0];

//console.log("Los argumentos son: ", argv);
//console.log("El comando es: ", comando);

if (comando == "add"){
    new Add(argv.usuario, argv.titulo, argv.texto, argv.color);
}
else if (comando == "list"){

    new List(argv.usuario);
}
else if (comando == "read"){

}
else if (comando == "remove"){

}
else{
    console.log("¡Comando inexistente!");
}

//console.log(yargs.argv)