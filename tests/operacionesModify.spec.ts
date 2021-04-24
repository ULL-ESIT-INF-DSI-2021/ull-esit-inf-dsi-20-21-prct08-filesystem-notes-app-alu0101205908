import 'mocha';
import {expect} from 'chai';
import { Modify } from '../src/aplicacion/principal/operacionModify';

const notaModify =  new Modify("Borja", "Nota 1", "Nota modificada en tests", "azul");

describe('Pruebas operación Modify', ()=> {

    it('notaModify.comprobarNotaExistente("Nota 1") return 0', ()=>{
        expect(notaModify.comprobarNotaExistente("Nota 1")).to.be.equal(0);
    });
});