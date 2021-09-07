import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Juego, Peon, Pieza, Tablero } from './piezas';


@Component({
  selector: 'app-juego-ajedrez',
  templateUrl: './juego-ajedrez.component.html',
  styleUrls: ['./juego-ajedrez.component.css']
})
export class JuegoAjedrezComponent implements OnInit {

  juego: Juego;

  piezaSeleccinada: Pieza;
  posiblesMovimietnos: number[][] = [];



  constructor() {
    this.juego = new Juego();
  }





  ngOnInit(): void {

  }


  piezaSeleccionada(pieza: Peon, tablero: Tablero) {

    this.piezaSeleccinada = pieza
    this.posiblesMovimietnos = pieza.movimientos(tablero);
  }

  mover(newX: number, newY: number) {
    this.juego.moverPieza(this.piezaSeleccinada, newX, newY)

    /*for (let i of this.posiblesMovimietnos) {
      if (i[0] == newX && i[1] == newY) {
        this.juego.moverPieza(this.piezaSeleccinada, newX, newY)
        break
      }
    }*/




  }
}
