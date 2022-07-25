import { Component } from '@angular/core';
import { EgresoModel } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.service';
import { IngresoModel } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'presupuesto-app';

  ingresos: IngresoModel[]
  egresos: EgresoModel[]

  //inyeccion de las dependencias - comunicacion con los servicios
  constructor(private ingresoServicio: IngresoServicio, private EgresoServicio: EgresoServicio) {
    this.ingresos = ingresoServicio.ingresos
    this.egresos = EgresoServicio.egresos
  }

  //obtener ingreso total inicial - sumo todos mis ingresos
  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal = ingresoTotal + ingreso.valor
    })

    return ingresoTotal
  }

  //obtener egreso total inicial - sumo todos mis egresos
  getEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal = egresoTotal + egreso.valor
    })

    return egresoTotal
  }

  //porcentaje total
  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal()
  }

  //presupuesto total
  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal()
  }

}
