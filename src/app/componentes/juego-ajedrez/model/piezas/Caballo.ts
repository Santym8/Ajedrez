import { Pieza } from "./Pieza";


export class Caballao extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Caballo")
    }

}
