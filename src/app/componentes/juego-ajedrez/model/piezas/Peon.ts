
import { Tablero } from "../Tablero";
import { Pieza } from "./Pieza";


export class Peon extends Pieza {

    moviminetoNumero: number;

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Peon")
        this.moviminetoNumero = 0;
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

            //Comer al paso
            if (this.x == 3) {
                if (tablero.casillas[this.x][this.y - 1].nombre == "Peon" && tablero.casillas[this.x][this.y - 1].moviminetoNumero == 1) {
                    movimientosValidos.push([this.x - 1, this.y - 1])
                }
                if (tablero.casillas[this.x][this.y + 1].nombre == "Peon" && tablero.casillas[this.x][this.y + 1].moviminetoNumero == 1) {
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

            //Comer al paso
            if (this.x == 4) {
                if (tablero.casillas[this.x][this.y - 1].nombre == "Peon" && tablero.casillas[this.x][this.y - 1].moviminetoNumero == 1) {
                    movimientosValidos.push([this.x + 1, this.y - 1])
                }
                if (tablero.casillas[this.x][this.y + 1].nombre == "Peon" && tablero.casillas[this.x][this.y + 1].moviminetoNumero == 1) {
                    movimientosValidos.push([this.x + 1, this.y + 1])
                }
            }


        }








        return movimientosValidos;

    }
}