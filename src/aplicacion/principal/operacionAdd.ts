import { writeFileSync } from 'fs';
import { openSync } from 'fs';
import { Print } from "../print/print"
import { mkdirSync } from 'fs';
import { Nota } from "../principal/tipoDefinido"

export class Add {

    private nota: Nota = {usuario: "", titulo: "", texto: "", color: ""};
    private ruta: string = "";
    private rutaFichero: string = "";

    constructor(usuario: string, titulo: string, texto: string, color: string){

        this.ruta = "./src/bbdd/" + usuario;
    
        this.rutaFichero = `./src/bbdd/${usuario}/${titulo}.json`;

        this.esNuevoUsuario(usuario);

        if (this.comprobarTareaExistente(titulo) == 0){

            if (this.comprobarColor(color) == 0){
                this.nota = {usuario: usuario, titulo: titulo, texto: texto, color: color};
                this.addBbdd();
            }
        }
    }


    comprobarTareaExistente(titulo: string){

        try{
            openSync(this.rutaFichero, "r");
            return new Print(`ERROR: Ya existe una nota con el titulo ${titulo}`).printRojo();
        }
        catch(err){
            return new Print(`OK: Se va a crear una nota con el titulo ${titulo}`).printVerde();
        }
    }


    esNuevoUsuario(usuario: string){
        try{
            mkdirSync(this.ruta);
            return new Print("").printRojo();
        }
        catch(err){
            return new Print("BIENVENIDO DE NUEVO").printVerde();
        }
    }


    comprobarColor(color: string){
        if (color != "rojo" && color != "azul" && color != "verde" && color != "amarillo") {
            return new Print(`ERROR: El color ${color} no está disponible`).printRojo();
        }
        else{
            return new Print("").printVerde();
        }
    }


    addBbdd(){

        let aux: JSON[] =  [];
        aux.push(JSON.parse(`{"usuario": "${this.nota.usuario}", "titulo": "${this.nota.titulo}", "texto": "${this.nota.texto}", "color": "${this.nota.color}"}`));
        writeFileSync(this.rutaFichero, JSON.stringify(aux, null, 2));
        new Print(`OK: Se ha creado una nueva nota con el titulo ${this.nota.titulo}`).printVerde();
    }
}

export const notaAdd =  new Add("Borja", "Nota 1", "Esto es la nota 1", "verde");