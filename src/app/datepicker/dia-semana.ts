export class DiaSemana {
    constructor (diaString: string, data: Date) {
      this.diaString = diaString;
      this.selecionado = false;
      this.periodo = false;
      this.foraPeriodo = false;
      this.data = data;
    }
    diaString: string;
    selecionado: boolean;
    periodo: boolean;
    data: Date;
    foraPeriodo: boolean;
  }