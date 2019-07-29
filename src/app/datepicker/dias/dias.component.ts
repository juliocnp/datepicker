import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Semana } from '../semana.enum';
import { Mes } from '../mes.enum';
import { DiaSemana } from '../dia-semana';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss']
})

export class DiasComponent implements OnInit {
  dias: DiaSemana[][] = [];
  cabecalhoSemana: string[];
  semana = Semana;
  mesNome: string;
  ano: number;
  mes: number;
  mesAtual: Date;
  dia1Selecionado: Date;
  dia2Selecionado: Date;
  diaUnicoSelecionado: Date;

  @Output() data1: EventEmitter<Date>;
  @Output() data2: EventEmitter<Date>;

  constructor() { 
    this.data1 = new EventEmitter<Date>();
    this.data2 = new EventEmitter<Date>();
  }

  ngOnInit() {
    this.mesAtual = new Date();
    this.montarCabecalhoSemana();
    this.montarMes(this.mesAtual);
  }

  montarCabecalhoSemana() {
    this.cabecalhoSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  }

  montarMes(mesSelecionado: Date) {
    this.dias = new Array<Array<DiaSemana>>();
    this.mesNome = Mes[mesSelecionado.getMonth() + 1];
    this.mes = mesSelecionado.getMonth() + 1;
    this.ano = mesSelecionado.getFullYear();
    const diaAux = new Date(this.copyObject(mesSelecionado));
    diaAux.setDate(1);
    const diaSemanaInicio = diaAux.getDay();

    for (let j = 0; j <= 5; j++) {
      let semana = new Array<DiaSemana>();
      let mesAcabado = false;
      for (let i = 0; i <= 6; i++) {
        if (j === 0 && i < diaSemanaInicio) {
          semana.push(null);
        } else {
          semana.push(new DiaSemana(diaAux.getDate().toString(), new Date(this.copyObject(diaAux))));
          diaAux.setDate(diaAux.getDate() + 1);
          mesAcabado = (Mes[this.mes] === Mes[diaAux.getMonth() + 1]) ? false : true;
          if (mesAcabado)
            break;
        }
      }
      this.dias.push(semana);
      if (mesAcabado)
        break;
    }
    this.PreencherPeriodo();
  }

  mesAnterior() {
    this.mesAtual.setMonth(this.mesAtual.getMonth() - 1);
    this.montarMes(this.mesAtual);
  }

  mesPosterior() {
    this.mesAtual.setMonth(this.mesAtual.getMonth() + 1);
    this.montarMes(this.mesAtual);
  }

  diaClique(dia: DiaSemana) {
    if (!this.diaUnicoSelecionado && !this.dia1Selecionado) {
      dia.selecionado = true;
      this.diaUnicoSelecionado = new Date(this.copyObject(dia.data));
      this.data1.emit(new Date(this.copyObject(this.diaUnicoSelecionado)));
    } else if (!this.dia2Selecionado) {
      dia.selecionado = true;
      this.dia1Selecionado = new Date(this.copyObject(this.diaUnicoSelecionado));
      this.dia2Selecionado = new Date(this.copyObject(dia.data));
      this.diaUnicoSelecionado = null;
      if (this.dia1Selecionado > this.dia2Selecionado) {
        const diaSelecionadoAux = new Date(this.copyObject(this.dia2Selecionado));
        this.dia2Selecionado = new Date(this.copyObject(this.dia1Selecionado));
        this.dia1Selecionado = new Date(this.copyObject(diaSelecionadoAux));
      }
      this.data1.emit(new Date(this.copyObject(this.dia1Selecionado)));
      this.data2.emit(new Date(this.copyObject(this.dia2Selecionado)));
      this.PreencherPeriodo();
    } else {
      this.dia1Selecionado = null;
      this.dia2Selecionado = null;
      this.data1.emit(null);
      this.data2.emit(null);
      this.montarMes(this.mesAtual);
    }
  }

  private PreencherPeriodo() {
    if (this.dia1Selecionado && this.dia2Selecionado) {
      this.dias.forEach(semana => {
        semana.forEach(diaAux => {
          if (diaAux &&
            (diaAux.data.valueOf() === this.dia1Selecionado.valueOf() ||
              diaAux.data.valueOf() === this.dia2Selecionado.valueOf())) {
            diaAux.selecionado = true;
          } else if (diaAux &&
            diaAux.data.valueOf() > this.dia1Selecionado.valueOf() &&
            diaAux.data.valueOf() < this.dia2Selecionado.valueOf()) {
            diaAux.periodo = true;
          } else if (diaAux) {
            diaAux.foraPeriodo = true;
          }
        });
      });
    }
  }

  copyObject(item: any) {
    return JSON.parse(JSON.stringify(item));
  }
}
