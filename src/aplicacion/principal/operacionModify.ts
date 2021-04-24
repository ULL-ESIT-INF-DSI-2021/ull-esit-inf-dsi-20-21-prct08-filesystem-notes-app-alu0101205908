import { unlinkSync } from "fs";
import { Print } from "../print/print"
import { Add } from "./operacionAdd";


export class Modify {

    private rutaFichero: string = "";

    constructor(usuario: string, titulo: string, texto: string, color: string){
        
        this.rutaFichero = `./src/bbdd/${usuario}/${titulo}.json`;

        if (this.comprobarNotaExistente(titulo) == 0) {
            
            new Add(usuario, titulo, texto, color);
        }
    }


    comprobarNotaExistente(titulo: string){

        try{
            unlinkSync(this.rutaFichero);
            return new Print(`OK: Se ha modificado la nota ${titulo}`).printVerde();
        }
        catch(err){
            return new Print(`ERROR: No existe una nota con el titulo ${titulo}`).printRojo();
        }
    }
}