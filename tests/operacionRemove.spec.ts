import 'mocha';
import {expect} from 'chai';
import { Remove } from '../src/aplicacion/principal/operacionRemove';

const notaAdd =  new Remove("Borja", "Nota 1");

describe('Pruebas operación ADD', ()=> {

    it('notaAdd.comprobarTareaExistente("Nota 1") return 0', ()=>{
        expect(notaAdd.comprobarTareaExistente("Nota 1")).to.be.equal(0);
    });
});