import { Tablero } from "../Tablero";
import { Pieza } from "./Pieza";

export class Torre extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Torre")
    }

    public movimientos(tablero: Tablero) {


        return (this.verticalSuperior(tablero).concat(this.verticalInferior(tablero))).concat((this.horizontalDerecha(tablero)).concat(this.horizontalIzquierda(tablero)));

    }

    private verticalSuperior(tablero: Tablero) {

        let movimientosValidos: number[][] = []

        let xVariable = this.x - 1;

        while (true) {
            if (tablero.casillaValida(xVariable, this.y)) {

                if (tablero.casillaVacia(xVariable, this.y)) {
                    movimientosValidos.push([xVariable, this.y])
                    xVariable--;
                } else {
                    if (tablero.piezaJugador(xVariable, this.y) != this.jugador) {
                        movimientosValidos.push([xVariable, this.y])
                        break;
                    } else {
                        break;
                    }
                }


            } else {
                break;
            }
        }

        return movimientosValidos;
    }


    private verticalInferior(tablero: Tablero) {

        let movimientosValidos: number[][] = []

        let xVariable = this.x + 1;

        while (true) {
            if (tablero.casillaValida(xVariable, this.y)) {

                if (tablero.casillaVacia(xVariable, this.y)) {
                    movimientosValidos.push([xVariable, this.y])
                    xVariable++;
                } else {
                    if (tablero.piezaJugador(xVariable, this.y) != this.jugador) {
                        movimientosValidos.push([xVariable, this.y])
                        break;
                    } else {
                        break;
                    }
                }
            } else {
                break;
            }
        }

        return movimientosValidos;
    }


    private horizontalDerecha(tablero: Tablero) {

        let movimientosValidos: number[][] = []

        let yVariable = this.y + 1;

        while (true) {
            if (tablero.casillaValida(this.x, yVariable)) {

                if (tablero.casillaVacia(this.x, yVariable)) {
                    movimientosValidos.push([this.x, yVariable])
                    yVariable++;
                } else {
                    if (tablero.piezaJugador(this.x, yVariable) != this.jugador) {
                        movimientosValidos.push([this.x, yVariable])
                        break;
                    } else {
                        break;
                    }
                }
            } else {
                break;
            }
        }

        return movimientosValidos;
    }

    private horizontalIzquierda(tablero: Tablero) {

        let movimientosValidos: number[][] = []

        let yVariable = this.y - 1;

        while (true) {
            if (tablero.casillaValida(this.x, yVariable)) {

                if (tablero.casillaVacia(this.x, yVariable)) {
                    movimientosValidos.push([this.x, yVariable])
                    yVariable--;
                } else {
                    if (tablero.piezaJugador(this.x, yVariable) != this.jugador) {
                        movimientosValidos.push([this.x, yVariable])
                        break;
                    } else {
                        break;
                    }
                }
            } else {
                break;
            }
        }

        return movimientosValidos;
    }

}
