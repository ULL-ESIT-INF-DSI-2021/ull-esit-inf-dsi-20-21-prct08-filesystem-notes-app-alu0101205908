import { unlinkSync } from "fs";
import { Print } from "../print/print"


export class Remove {

    private rutaFichero: string = "";
    
    constructor(usuario: string, titulo: string) {

        this.rutaFichero = `./src/bbdd/${usuario}/${titulo}.json`;

        this.comprobarNotaExistente(titulo);
        
    }


    comprobarNotaExistente(titulo: string){

        try{
            //unlinkSync(this.rutaFichero);
            return new Print(`OK: Se ha eliminado la nota con titulo: ${titulo}`).printVerde();
        }
        catch(err){
            return new Print(`ERROR: No existe una nota con el titulo ${titulo}`).printRojo();
        }
    }
}