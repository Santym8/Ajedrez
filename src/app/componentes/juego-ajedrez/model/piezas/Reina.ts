import { Pieza } from "./Pieza";

export class Reina extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Reina")
    }

}
