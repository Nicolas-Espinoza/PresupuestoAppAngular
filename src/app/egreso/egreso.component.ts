import { Component, Input, OnInit } from '@angular/core';
import { EgresoModel } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: EgresoModel[] = []
  @Input() ingresoTotal: number

  constructor(private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos
  }

  eliminarRegistro(egreso: EgresoModel) {
    this.egresoServicio.eliminar(egreso)
  }

  getPorcentaje(egreso: EgresoModel) {
    return egreso.valor / this.ingresoTotal
  }

}
