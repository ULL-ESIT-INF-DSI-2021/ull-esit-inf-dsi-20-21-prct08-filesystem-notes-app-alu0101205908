export abstract class MapYReduce {
    protected array: number[] = [];
    protected mapa: number[] = [];
  
    constructor(array: number[]){
        this.array = array;
    }

    public getArray(){
        return this.array
    }

    public setArray(array :number[]){
        this.array = array
    }
    
    public run() {

        this.map(function funcion(a: number): number{
            return (a**2);
        });
    
        //this.hookMap();
    
        return this.reduce();
    
        //this.hookReduce();
    }

    protected abstract reduce(): void;

    protected hookMap() {}
    protected hookReduce() {}

    protected map(funcion: (item: number) => number) {
        this.array.forEach((item) => {
            this.mapa.push(funcion(item)) 
        });
    }
}