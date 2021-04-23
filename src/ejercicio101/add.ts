import { MapYReduce } from "./ejercicio";

export class AddMapYReduce extends MapYReduce {

    constructor(array: number[]){
        super(array);
    }

    public reduce(){

        let total: number = 0;

        this.mapa.forEach(item => {
            total = item + total
        })
        return total
    }
    
}

export let prueba = new AddMapYReduce([1, 2, 3 ,4])