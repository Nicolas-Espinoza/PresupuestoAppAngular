import { EgresoModel } from "./egreso.model";

export class EgresoServicio {
    egresos: EgresoModel[] = [new EgresoModel('Pago alquiler', 400), new EgresoModel('Pago celular', 200)]

    eliminar(egreso: EgresoModel) {
        const indice = this.egresos.indexOf(egreso)
        this.egresos.splice(indice, 1)
    }
}