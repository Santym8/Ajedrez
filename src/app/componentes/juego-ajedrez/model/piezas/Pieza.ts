

export class Pieza  {

    public x: number;
    public y: number;
    public primerMovimineto;
    public jugador: number
    public nombre;



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