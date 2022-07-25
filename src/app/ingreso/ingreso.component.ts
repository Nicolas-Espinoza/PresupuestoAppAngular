import { Component, OnInit } from '@angular/core';
import { IngresoModel } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: IngresoModel[]

  constructor(private ingresoServicio: IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos
  }

  eliminarRegistro(ingreso: IngresoModel) {
    this.ingresoServicio.eliminar(ingreso)
  }

}
