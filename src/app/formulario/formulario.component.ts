import { Component, OnInit } from '@angular/core';
import { EgresoModel } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { IngresoModel } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = 'ingresoOp';
  descripcionInput: string;
  valorInput: number

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento: any) {
    this.tipo = evento.target.value
    console.log('soy tipo', this.tipo)
  }

  //modifico los arrays de mis servicios
  agregarEntrada() {
    console.log(this.descripcionInput)
    if (this.tipo === 'ingresoOp')
      this.ingresoServicio.ingresos.push(new IngresoModel(this.descripcionInput, this.valorInput))
    else
      this.egresoServicio.egresos.push(new EgresoModel(this.descripcionInput, this.valorInput))
  }

}
