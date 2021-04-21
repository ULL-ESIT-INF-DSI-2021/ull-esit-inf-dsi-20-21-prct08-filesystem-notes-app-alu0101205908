export abstract class MapYReduce {
    protected array: number[] = [1, 2, 3, 4];
  
    constructor(){}

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
    
        this.hookMap();
    
        this.reduce();
    
        this.hookReduce();
    }

    protected abstract reduce(): void;

    protected hookMap() {}
    protected hookReduce() {}

    protected map(funcion: (item: number) => number) {
        let mapa: number[] = [];
        this.array.forEach((item) => {
              mapa.push(funcion(item)) 
        });
        console.log(mapa)
        return mapa;
    }
}