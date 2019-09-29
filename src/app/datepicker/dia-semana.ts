export class DiaSemana {
    constructor (diaString: string, data: Date) {
      this.diaString = diaString;
      this.selecionado = false;
      this.periodo = false;
      this.foraPeriodo = false;
      this.data = data;
      let diaAtual = new Date();
      diaAtual.setHours(0, 0, 0, 0);
      this.diaAtual = diaAtual.getTime() === this.data.getTime() ? true : false;
      this.marcadorDiaAtual = JSON.parse(JSON.stringify(this.diaAtual));
      this.desativado = false;
    }
    diaString: string;
    selecionado: boolean;
    periodo: boolean;
    data: Date;
    foraPeriodo: boolean;
    diaAtual: boolean;
    marcadorDiaAtual: boolean;
    desativado: boolean;
  }