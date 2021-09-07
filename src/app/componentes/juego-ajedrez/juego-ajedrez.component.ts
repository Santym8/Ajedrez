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



  constructor() {
    this.juego = new Juego();
  }





  ngOnInit(): void {

  }


  piezaSeleccionada(pieza: any, tablero: Tablero) {

    if (pieza.nombre != "libre") {
      this.piezaSeleccinada = pieza
      this.posiblesMovimietnos = pieza.movimientos(tablero);
    }


  }

  mover(newX: number, newY: number) {
    if (this.piezaSeleccinada) {

      for (let i of this.posiblesMovimietnos) {
        if (i[0] == newX && i[1] == newY) {
          this.juego.moverPieza(this.piezaSeleccinada, newX, newY)
          break
        }
      }
      this.piezaSeleccinada = null;
    }


  }
}
