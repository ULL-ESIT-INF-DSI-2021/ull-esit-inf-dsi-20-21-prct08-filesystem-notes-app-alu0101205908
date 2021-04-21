import { MapYReduce } from "./ejercicio";

export class AddMapYReduce extends MapYReduce {

    constructor(array: number[]){
        super();
    }

    public reduce(){

        let total: number = 0;

        this.map().forEach(item => {
            total = item + total
        })
        console.log(total)
        return total
    }
    
}

export let prueba = new AddMapYReduce([1, 2, 3 ,4])