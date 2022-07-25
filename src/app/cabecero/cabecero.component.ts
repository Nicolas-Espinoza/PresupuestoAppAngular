import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  //variables que recibo de app component
  @Input() presupuestoTotal: number
  @Input() ingresoTotal: number
  @Input() egresoTotal: number
  @Input() porcentajeTotal: number


  constructor() { }

  ngOnInit(): void {
  }

}
