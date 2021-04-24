const chalk = require('chalk');


export class Print {

    constructor(private mensaje: string){}

    printRojo(){
        console.log(chalk.red(`${this.mensaje}`));
        return 1;
    }

    
    printVerde(){
        console.log(chalk.green(`${this.mensaje}`));
        return 0;
    }
}