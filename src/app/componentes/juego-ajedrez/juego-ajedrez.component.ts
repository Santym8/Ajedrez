import { Component, OnInit } from '@angular/core';


import { Juego } from './model/Juego';
import { Tablero } from './model/Tablero';


@Component({
  selector: 'app-juego-ajedrez',
  templateUrl: './juego-ajedrez.component.html',
  styleUrls: ['./juego-ajedrez.component.css']
})
export class JuegoAjedrezComponent implements OnInit {

  juego: Juego;

  piezaSeleccinada: any;
  posiblesMovimietnos: number[][] = [];
  turno: number;
  reyBlancoJaque: boolean;
  reyNegroJaque: boolean;



  constructor() {
    this.juego = new Juego();
    this.turno = 0;
    this.reyBlancoJaque = false;
    this.reyNegroJaque = false;
  }





  ngOnInit(): void {

  }

  reyEnJaque() {
    for (let i = 0; i < this.juego.tablero.casillas.length; i++) {
      for (let j = 0; j < this.juego.tablero.casillas[i].length; j++) {
        if (this.juego.tablero.casillas[i][j].nombre == "Rey") {
          if (this.juego.tablero.casillas[i][j].jugador == 0) {
            this.reyBlancoJaque = this.juego.tablero.casillas[i][j].jaque;
          } else {
            this.reyNegroJaque = this.juego.tablero.casillas[i][j].jaque;
          }
        }
      }
    }
  }

  cambairTurno() {
    if (this.turno == 0) {
      this.turno = 1;
    } else {
      this.turno = 0;
    }
  }


  piezaSeleccionada(pieza: any, tablero: Tablero) {

    if (pieza.nombre != "libre") {
      this.piezaSeleccinada = pieza
      this.posiblesMovimietnos = pieza.movimientos(tablero);
    }


  }

  mover(newX: number, newY: number) {
    if (this.piezaSeleccinada && this.piezaSeleccinada.jugador == this.turno) {
      for (let i of this.posiblesMovimietnos) {
        if (i[0] == newX && i[1] == newY) {
          this.juego.moverPieza(this.piezaSeleccinada, newX, newY);
          this.cambairTurno();
          break
        }
      }
      this.piezaSeleccinada = null;
      this.posiblesMovimietnos = [];
      this.reyEnJaque();
    }
  }


  casillaNegra(i: number, j: number) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        return false;
      }
      return true;
    } else {
      if (j % 2 == 0) {
        return true
      } else return false
    }
  }
}

