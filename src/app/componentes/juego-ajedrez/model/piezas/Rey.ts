import { Pieza } from "./Pieza";


export class Rey extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Rey")
    }

}



