import 'mocha';
import {expect} from 'chai';
import { Add } from '../src/aplicacion/principal/operacionAdd';

const notaAdd =  new Add("Borja", "Nota 1", "Esto es la nota 1", "verde");

describe('Pruebas operación ADD', ()=> {

    it('notaAdd.esNuevoUsuario("borja") return 0', ()=>{
        expect(notaAdd.esNuevoUsuario("borja")).to.be.equal(0);
    });

    it('notaAdd.comprobarColor("Verde") return 1', ()=>{
        expect(notaAdd.comprobarColor("Verde")).to.be.equal(1);
    });

    it('notaAdd.comprobarTareaExistente("Nota 1") return 1', ()=>{
        expect(notaAdd.comprobarTareaExistente("Nota 1")).to.be.equal(1);
    });
});