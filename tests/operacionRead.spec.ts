import 'mocha';
import {expect} from 'chai';
import { Read } from '../src/aplicacion/principal/operacionRead';

const notaRead=  new Read("Borja", "Nota 1");

describe('Pruebas operación Read', ()=> {

    it('notaRead.comprobarNotaExistente("Nota 1") return 1', ()=>{
        expect(notaRead.comprobarNotaExistente("Nota 1")).to.be.equal(1);
    });
});