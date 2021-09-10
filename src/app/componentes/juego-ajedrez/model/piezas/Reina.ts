import { Tablero } from "../Tablero";
import { Pieza } from "./Pieza";

export class Reina extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Reina")
    }

    movimientos(tablero:Tablero){

        let movimietnosRectos = (this.verticalSuperior(tablero).concat(this.verticalInferior(tablero))).concat((this.horizontalDerecha(tablero)).concat(this.horizontalIzquierda(tablero)));
        let movimientosDiagonal = (this.positivaSuperior(tablero).concat(this.positivaInferior(tablero))).concat((this.negativaInferior(tablero).concat(this.nevativaSuperior(tablero))))

        return movimientosDiagonal.concat(movimietnosRectos)
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
