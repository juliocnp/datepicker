import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.scss']
})
export class MesesComponent implements OnInit {

  anoSelecionado: number;
  dataAtual = new Date();

  constructor() { }

  ngOnInit() {
    this.dataAtual.setHours(0, 0, 0, 0);
    this.anoSelecionado = this.dataAtual.getFullYear();
  }

  anoAnterior() {
    this.dataAtual.setFullYear(this.dataAtual.getFullYear() - 1);
    this.anoSelecionado = this.dataAtual.getFullYear();
  }

  anoPosterior() {
    this.dataAtual.setFullYear(this.dataAtual.getFullYear() + 1);
    this.anoSelecionado = this.dataAtual.getFullYear();
  }
}
