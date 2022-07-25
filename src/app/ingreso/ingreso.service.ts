import { IngresoModel } from "./ingreso.model";

export class IngresoServicio {
    ingresos: IngresoModel[] = [new IngresoModel('Salario', 4000), new IngresoModel('Venta moto', 800)]

    eliminar(ingreso: IngresoModel) {
        const indice: number = this.ingresos.indexOf(ingreso)
        this.ingresos.splice(indice, 1)
    }
}