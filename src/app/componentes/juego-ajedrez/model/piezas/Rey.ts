

import { Tablero } from "../Tablero";
import { Pieza } from "./Pieza";


export class Rey extends Pieza {

    jaque:boolean;



    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Rey")
        this.jaque = false;
       
    }

    public movimientos(tablero: Tablero) {

        let movimientosTeoricos = [
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x - 1, this.y - 1],
        ]

        let movimientosPosibles: number[][] = []


        for (let movimiento of movimientosTeoricos) {
            if (tablero.casillaValida(movimiento[0], movimiento[1])) {
                if (tablero.casillaVacia(movimiento[0], movimiento[1])) {
                    movimientosPosibles.push([movimiento[0], movimiento[1]]);
                } else {
                    if (tablero.piezaJugador(movimiento[0], movimiento[1]) != this.jugador) {
                        movimientosPosibles.push([movimiento[0], movimiento[1]]);
                    }
                }
            }
        }

        if (this.primerMovimineto == true) {


            //Enroque Corto
            if (tablero.casillas[this.x][7].nombre == "Torre" && tablero.casillas[this.x][7].primerMovimineto) {
                if (tablero.casillaVacia(this.x, this.y + 1) && !(Tablero.casillaAmenazada(this.jugador, this.x, this.y + 1, tablero))) {
                    if (tablero.casillaVacia(this.x, this.y + 2) && !(Tablero.casillaAmenazada(this.jugador, this.x, this.y + 2, tablero))) {
                        movimientosPosibles.push([this.x, this.y + 2])

                    }
                }
            }

            //Ernoque latgo 
            if (tablero.casillas[this.x][0].nombre == "Torre" && tablero.casillas[this.x][0].primerMovimineto) {

                if (tablero.casillaVacia(this.x, this.y - 1) && !(Tablero.casillaAmenazada(this.jugador, this.x, this.y - 1, tablero))) {
                    if (tablero.casillaVacia(this.x, this.y - 2) && !(Tablero.casillaAmenazada(this.jugador, this.x, this.y - 2, tablero))) {
                        if (tablero.casillaVacia(this.x, this.y - 3)) {
                            movimientosPosibles.push([this.x, this.y - 2])

                        }

                    }
                }

            }


        }

        return movimientosPosibles;
    }

}

