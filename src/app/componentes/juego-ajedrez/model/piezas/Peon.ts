
import { Tablero } from "../Tablero";
import { Pieza } from "./Pieza";


export class Peon extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Peon")
    }


    movimientos(tablero: Tablero) {

        let movimientosValidos: number[][] = []

        if (this.jugador == 0) {
            if (this.primerMovimineto == true) {
                if (tablero.casillaVacia(this.x - 1, this.y)) {
                    if (tablero.casillaVacia(this.x - 2, this.y)) {
                        movimientosValidos.push([this.x - 2, this.y])
                    }

                }


            }

            if (tablero.casillaValida(this.x - 1, this.y) && tablero.casillaVacia(this.x - 1, this.y)) {
                movimientosValidos.push([this.x - 1, this.y])
            }
            //Capturar pieza enemiga
            if (tablero.casillaValida(this.x - 1, this.y - 1) && !tablero.casillaVacia(this.x - 1, this.y - 1)) {
                if (tablero.piezaJugador(this.x - 1, this.y - 1) != this.jugador) {
                    movimientosValidos.push([this.x - 1, this.y - 1])
                }
            }

            if (tablero.casillaValida(this.x - 1, this.y + 1) && !tablero.casillaVacia(this.x - 1, this.y + 1)) {
                if (tablero.piezaJugador(this.x - 1, this.y + 1) != this.jugador) {
                    movimientosValidos.push([this.x - 1, this.y + 1])
                }
            }

        } else {
            if (this.primerMovimineto == true) {
                if (tablero.casillaVacia(this.x + 1, this.y)) {
                    if (tablero.casillaVacia(this.x + 2, this.y)) {
                        movimientosValidos.push([this.x + 2, this.y])
                    }

                }

            }

            if (tablero.casillaValida(this.x + 1, this.y) && tablero.casillaVacia(this.x + 1, this.y)) {
                movimientosValidos.push([this.x + 1, this.y])
            }
            //Capturar pieza enemiga
            if (tablero.casillaValida(this.x + 1, this.y - 1) && !tablero.casillaVacia(this.x + 1, this.y - 1)) {
                if (tablero.piezaJugador(this.x + 1, this.y - 1) != this.jugador) {
                    movimientosValidos.push([this.x + 1, this.y - 1])
                }
            }

            if (tablero.casillaValida(this.x + 1, this.y + 1) && !tablero.casillaVacia(this.x + 1, this.y + 1)) {
                if (tablero.piezaJugador(this.x + 1, this.y + 1) != this.jugador) {
                    movimientosValidos.push([this.x + 1, this.y + 1])
                }
            }

        }








        return movimientosValidos;

    }
}