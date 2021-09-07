

export class CasillaLibre {
    public nombre = "libre";
}

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


export class Pieza {

    public x: number;
    public y: number;
    public primerMovimineto;
    protected jugador: number
    protected nombre;



    constructor(x: number, y: number, jugador: number) {
        this.x = x;
        this.y = y;
        this.jugador = jugador;
        this.primerMovimineto = true;
        this.nombre = "";

    }

    public mover(newX: number, newY: number) {
        this.x = newX;
        this.y = newY;
    }



    asiganrNombre(nombre: string) {
        this.nombre = nombre;
    }
}

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

export class Caballao extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Caballo")
    }

}

export class Torre extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Torre")
    }

}

export class Alfil extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Alfil")
    }

}

export class Reina extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Reina")
    }

}

export class Rey extends Pieza {

    constructor(x: number, y: number, jugador: number) {
        super(x, y, jugador);
        this.asiganrNombre("Rey")
    }

}



