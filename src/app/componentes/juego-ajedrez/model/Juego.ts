import { CasillaLibre } from "./piezas/CasillaLibre";
import { Pieza } from "./piezas/Pieza";
import { Tablero } from "./Tablero";


export class Juego {


    public tablero: Tablero;

    constructor() {
        this.tablero = new Tablero()

    }

    public moverPieza(pieza: Pieza, newX: number, newY: number) {
        pieza.primerMovimineto = false;
        this.tablero.casillas[pieza.x][pieza.y] = new CasillaLibre;
        this.tablero.casillas[newX][newY] = pieza;
        pieza.mover(newX, newY);
    }








}



