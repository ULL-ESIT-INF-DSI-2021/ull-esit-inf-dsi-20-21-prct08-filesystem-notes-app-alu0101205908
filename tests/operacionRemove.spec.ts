import 'mocha';
import {expect} from 'chai';
import { Remove } from '../src/aplicacion/principal/operacionRemove';

const notaRemove =  new Remove("Borja", "Nota 1");

describe('Pruebas operación Remove', ()=> {

    it('notaRemove.comprobarNotaExistente("Nota 1") return 0', ()=>{
        expect(notaRemove.comprobarNotaExistente("Nota 1")).to.be.equal(0);
    });
});