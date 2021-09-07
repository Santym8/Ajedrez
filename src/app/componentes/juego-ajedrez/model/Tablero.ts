import { Alfil } from "./piezas/Alfil";
import { Caballao } from "./piezas/Caballo";
import { CasillaLibre } from "./piezas/CasillaLibre";
import { Peon } from "./piezas/Peon";
import { Reina } from "./piezas/Reina";
import { Rey } from "./piezas/Rey";
import { Torre } from "./piezas/Torre";

export class Tablero {

    public casillas: any;

    constructor() {
        this.casillas = [
            [new Torre(0, 0, 1), new Caballao(0, 1, 1), new Alfil(0, 2, 1), new Reina(0, 3, 1), new Rey(0, 4, 1), new Alfil(0, 5, 1), new Caballao(0, 6, 1), new Torre(0, 7, 1)],
            [new Peon(1, 0, 1), new Peon(1, 1, 1), new Peon(1, 2, 1), new Peon(1, 3, 1), new Peon(1, 4, 1), new Peon(1, 5, 1), new Peon(1, 6, 1), new Peon(1, 7, 1)],
            [new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre()],
            [new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre()],
            [new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre()],
            [new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre(), new CasillaLibre()],
            [new Peon(6, 0, 0), new Peon(6, 1, 0), new Peon(6, 2, 0), new Peon(6, 3, 0), new Peon(6, 4, 0), new Peon(6, 5, 0), new Peon(6, 6, 0), new Peon(6, 7, 0)],
            [new Torre(7, 0, 0), new Caballao(7, 1, 0), new Alfil(7, 2, 0), new Reina(7, 3, 0), new Rey(7, 4, 0), new Alfil(7, 5, 0), new Caballao(7, 6, 0), new Torre(7, 7, 0)],

        ]
    }

    public casillaVacia(x: number, y: number) {
        if ((this.casillas[x][y]).nombre == "libre") {
            return true
        }

        return false
    }

    public piezaJugador(x: number, y: number) {
        return (this.casillas[x][y]).jugador
    }

    casillaValida(x: number, y: number) {

        if (x < this.casillas.length && x >= 0) {
            if (y < this.casillas.length && y >= 0) {
                return true
            }
        }
        return false

    }


}
