const chalk = require('chalk');


export class Print {

    constructor(private mensaje: string){}

    printRojo(){
        console.log(chalk.red(`${this.mensaje}`));
        return 1;
    }


    printAzul(){
        console.log(chalk.blue(`${this.mensaje}`));
    }

    
    printVerde(){
        console.log(chalk.green(`${this.mensaje}`));
        return 0;
    }


    printAmarillo(){
        console.log(chalk.yellow(`${this.mensaje}`));
    }
}