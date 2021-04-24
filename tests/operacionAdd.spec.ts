import 'mocha';
import {expect} from 'chai';
import { notaAdd } from '../src/aplicacion/principal/operacionAdd';


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