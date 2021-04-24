import { readdirSync } from "fs";
import { readFileSync } from "fs";
import { Print } from "../print/print";

export class List {

    private listaNotas: string[] = [];
    private ruta: string = "";


    constructor(usuario: string){

        try {
            this.ruta = "./src/bbdd/" + usuario;
            this.comprobarNotas();
        }
        catch(err){

            new Print(err).printRojo();
        }
    }


    comprobarNotas(){

        readdirSync(this.ruta).forEach(nota => {
            this.listaNotas.push(nota);
        });

        if (this.listaNotas.length == 0){
            throw "ERROR: El usuario no tiene notas.";
        }
        else{
            new Print("Tiene las siguientes notas: ").printVerde();
            this.listaNotas.forEach(nota => {
                const data = readFileSync(`${this.ruta}/${nota}`);
                if (data.includes("rojo")){
                    new Print(`${nota}`).printRojo();
                }
                else if (data.includes("azul")){
                    new Print(`${nota}`).printAzul();
                }
                else if (data.includes("verde")){
                    new Print(`${nota}`).printVerde();
                }
                else if (data.includes("amarillo")){
                    new Print(`${nota}`).printAmarillo();
                }
            });
        }
    }
}