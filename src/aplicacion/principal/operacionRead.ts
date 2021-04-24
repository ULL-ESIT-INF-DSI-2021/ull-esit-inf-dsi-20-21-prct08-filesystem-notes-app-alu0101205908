import { readFileSync } from "fs";
import { Print } from "../print/print"


export class Read {

    private rutaFichero: string = "";
    private titulo: string = "";
    private nota: string = "";
    private texto: string = "";


    constructor(usuario: string, titulo: string){
        
        this.rutaFichero = `./src/bbdd/${usuario}/${titulo}.json`;

        if (this.comprobarNotaExistente(titulo) == 0) {
            
            this.nota = readFileSync(this.rutaFichero).toString();
            this.titulo = titulo;
            this.tituloNota();
            this.textoNota();

        }
    }


    comprobarNotaExistente(titulo: string){

        try{
            return new Print("").printVerde();
        }
        catch(err){
            return new Print(`ERROR: No existe una nota con el titulo ${titulo}`).printRojo();
        }
    }


    tituloNota(){
            
        if (this.nota.includes(`"color:" "rojo"`)){
            new Print(`${this.titulo}`).printRojo();
        }
        else if (this.nota.includes(`"color": "azul"`)){
            new Print(`${this.titulo}`).printAzul();
        }
        else if (this.nota.includes(`"color": "verde"`)){
            new Print(`${this.titulo}`).printVerde();
        }
        else if (this.nota.includes(`"color": "amarillo"`)){
            new Print(`${this.titulo}`).printAmarillo();
        }
    }


    textoNota(){

        let i: number = this.nota.indexOf(`texto":`);
        let j: number = this.nota.indexOf(`"color":`);
        this.texto = this.nota.substring(i+9, j-7);
        console.log(this.texto);
    }
}