import { Tablero } from "../Tablero";
import { Pieza } from "./Pieza";


export class Alfil extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Alfil")
    }

    movimientos(tablero: Tablero) {

        return (this.positivaSuperior(tablero).concat(this.positivaInferior(tablero))).concat((this.negativaInferior(tablero).concat(this.nevativaSuperior(tablero))))

    }
    //Pendiente positiva
    private positivaSuperior(tablero: Tablero) {
        let movimientosValidos: number[][] = []
        let xVariable: number = this.x - 1;
        let yVariable: number = this.y + 1;

        while (true) {

            if (tablero.casillaValida(xVariable, yVariable)) {

                if (tablero.casillaVacia(xVariable, yVariable)) {
                    movimientosValidos.push([xVariable, yVariable]);
                    xVariable--;
                    yVariable++;
                } else {
                    if (tablero.piezaJugador(xVariable, yVariable) != this.jugador) {
                        movimientosValidos.push([xVariable, yVariable]);
                    }
                    break
                }

            } else {
                break
            }

        }

        return movimientosValidos;
    }

    private positivaInferior(tablero: Tablero) {
        let movimientosValidos: number[][] = []
        let xVariable: number = this.x + 1;
        let yVariable: number = this.y - 1;

        while (true) {

            if (tablero.casillaValida(xVariable, yVariable)) {

                if (tablero.casillaVacia(xVariable, yVariable)) {
                    movimientosValidos.push([xVariable, yVariable]);
                    xVariable++;
                    yVariable--;
                } else {
                    if (tablero.piezaJugador(xVariable, yVariable) != this.jugador) {
                        movimientosValidos.push([xVariable, yVariable]);
                    }
                    break
                }

            } else {
                break
            }

        }

        return movimientosValidos;
    }


     //Pendiente Negativa
     private nevativaSuperior(tablero: Tablero) {
        let movimientosValidos: number[][] = []
        let xVariable: number = this.x - 1;
        let yVariable: number = this.y - 1;

        while (true) {

            if (tablero.casillaValida(xVariable, yVariable)) {

                if (tablero.casillaVacia(xVariable, yVariable)) {
                    movimientosValidos.push([xVariable, yVariable]);
                    xVariable--;
                    yVariable--;
                } else {
                    if (tablero.piezaJugador(xVariable, yVariable) != this.jugador) {
                        movimientosValidos.push([xVariable, yVariable]);
                    }
                    break
                }

            } else {
                break
            }

        }

        return movimientosValidos;
    }

    private negativaInferior(tablero: Tablero) {
        let movimientosValidos: number[][] = []
        let xVariable: number = this.x + 1;
        let yVariable: number = this.y + 1;

        while (true) {

            if (tablero.casillaValida(xVariable, yVariable)) {

                if (tablero.casillaVacia(xVariable, yVariable)) {
                    movimientosValidos.push([xVariable, yVariable]);
                    xVariable++;
                    yVariable++;
                } else {
                    if (tablero.piezaJugador(xVariable, yVariable) != this.jugador) {
                        movimientosValidos.push([xVariable, yVariable]);
                    }
                    break
                }

            } else {
                break
            }

        }

        return movimientosValidos;
    }
}