import 'mocha';
import {expect} from 'chai';
import {prueba} from '../src/ejercicio101/add'

describe('Pruebas clase Reduce', ()=> {

    it('prueba.reduce() return ', ()=>{
        expect(prueba.run()).to.be.equal(30);
    });
});