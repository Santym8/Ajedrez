import { CasillaLibre } from "./piezas/CasillaLibre";
import { Peon } from "./piezas/Peon";
import { Pieza } from "./piezas/Pieza";
import { Reina } from "./piezas/Reina";
import { Torre } from "./piezas/Torre";
import { Tablero } from "./Tablero";


export class Juego {


    public tablero: Tablero;


    constructor() {
        this.tablero = new Tablero()

    }

    private reyEnJaque() {
        for (let i = 0; i < this.tablero.casillas.length; i++) {
            for (let j = 0; j < this.tablero.casillas[i].length; j++) {
                if (this.tablero.casillas[i][j].nombre == "Rey") {
                    if (Tablero.casillaAmenazada(this.tablero.casillas[i][j].jugador, i, j, this.tablero)) {
                        this.tablero.casillas[i][j].jaque = true;
                    } else {
                        this.tablero.casillas[i][j].jaque = false;
                    }
                }
            }
        }
    }

    public moverPieza(pieza: Pieza, newX: number, newY: number) {

        //Promocion de Peon a reina
        if (pieza.nombre == "Peon" && (newX == 0 || newX == 7)) {

            this.tablero.casillas[pieza.x][pieza.y] = new CasillaLibre()
            this.tablero.casillas[newX][newY] = new Reina(newX, newY, pieza.jugador)

        } else {
            //Mueve la torre para Enroque largo y corto
            if (pieza.nombre == "Rey" && pieza.primerMovimineto) {

                if (newX == 0) {
                    if (newY == 2) {
                        this.tablero.casillas[0][0] = new CasillaLibre();
                        this.tablero.casillas[0][3] = new Torre(0, 3, pieza.jugador);
                    }
                    if (newY == 6) {
                        this.tablero.casillas[0][7] = new CasillaLibre();
                        this.tablero.casillas[0][5] = new Torre(0, 5, pieza.jugador);
                    }
                }
                if (newX == 7) {
                    if (newY == 2) {
                        this.tablero.casillas[7][0] = new CasillaLibre();
                        this.tablero.casillas[7][3] = new Torre(7, 3, pieza.jugador);
                    }
                    if (newY == 6) {
                        this.tablero.casillas[7][7] = new CasillaLibre();
                        this.tablero.casillas[7][5] = new Torre(7, 5, pieza.jugador);
                    }
                }
            }

            //Elimina el peon al capturar al paso
            if (pieza.nombre == "Peon") {
                if (pieza.jugador == 0 && pieza.x == 3) {
                    if (this.tablero.casillas[pieza.x][pieza.y - 1].nombre == "Peon" && this.tablero.casillas[pieza.x][pieza.y - 1].moviminetoNumero == 1) {
                        if (newX == pieza.x - 1 && newY == pieza.y - 1) {
                            this.tablero.casillas[pieza.x][pieza.y - 1] = new CasillaLibre()
                        }

                    }
                    if (this.tablero.casillas[pieza.x][pieza.y + 1].nombre == "Peon" && this.tablero.casillas[pieza.x][pieza.y + 1].moviminetoNumero == 1) {
                        if (newX == pieza.x - 1 && newY == pieza.y + 1) {
                            this.tablero.casillas[pieza.x][pieza.y + 1] = new CasillaLibre()
                        }

                    }
                }
                if (pieza.jugador == 1 && pieza.x == 4) {

                    if (this.tablero.casillas[pieza.x][pieza.y - 1].nombre == "Peon" && this.tablero.casillas[pieza.x][pieza.y - 1].moviminetoNumero == 1) {
                        if (newX == pieza.x + 1 && newY == pieza.y - 1) {
                            this.tablero.casillas[pieza.x][pieza.y - 1] = new CasillaLibre()
                        }
                    }
                    if (this.tablero.casillas[pieza.x][pieza.y + 1].nombre == "Peon" && this.tablero.casillas[pieza.x][pieza.y + 1].moviminetoNumero == 1) {
                        if (newX == pieza.x + 1 && newY == pieza.y + 1) {
                            this.tablero.casillas[pieza.x][pieza.y + 1] = new CasillaLibre()
                        }

                    }

                }

                (pieza as Peon).moviminetoNumero += 1;
            }

            pieza.primerMovimineto = false;
            this.tablero.casillas[pieza.x][pieza.y] = new CasillaLibre();
            this.tablero.casillas[newX][newY] = pieza;
            pieza.mover(newX, newY);
        }

        this.reyEnJaque();



    }










}



