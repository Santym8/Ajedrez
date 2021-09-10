
import { Tablero } from "../Tablero";
import { Pieza } from "./Pieza";


export class Caballao extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Caballo")
    }

    public movimientos(tablero: Tablero) {

        let moviminetosTeoricos = [
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
        ]

        let movimientosValidos: number[][] = [];

        for (let movimineto of moviminetosTeoricos) {
            if (tablero.casillaValida(movimineto[0], movimineto[1])) {

                if (tablero.casillaVacia(movimineto[0], movimineto[1])) {
                    movimientosValidos.push([movimineto[0], movimineto[1]]);
                } else {
                    if (tablero.piezaJugador(movimineto[0], movimineto[1]) != this.jugador) {
                        movimientosValidos.push([movimineto[0], movimineto[1]]);
                    }
                }

            }
        }


        return movimientosValidos;

    }

}
